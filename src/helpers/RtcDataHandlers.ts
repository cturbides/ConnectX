import { IAgoraRTCClient, IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';
import { UserProps } from '../components/Room/Users/User';
import React from 'react';

export function setMediaHandlers(mediaClient: IAgoraRTCClient, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	mediaClient.on('user-left', user => userLeft(user, setUsers));
	mediaClient.on('user-published', (user, mediaType) => userPublished(mediaClient, user, mediaType, setUsers));
	mediaClient.on('user-unpublished', (user, mediaType) => userUnpublished(mediaClient, user, mediaType, setUsers));
}

function userLeft(remoteUser: IAgoraRTCRemoteUser, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => [...users].filter(user => user.id !== remoteUser.uid));
}

async function userPublished(mediaClient: IAgoraRTCClient, remoteUser: IAgoraRTCRemoteUser, mediaType: 'audio' | 'video', setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	await mediaClient.subscribe(remoteUser, mediaType);

	setUsers(users => {
		const newUsers = [...users];
		const index = newUsers.findIndex(user => user.id === remoteUser.uid);

		if (mediaType === 'audio') {
			const micTrack = remoteUser.audioTrack?.getMediaStreamTrack();
			newUsers[index].media.addTrack(micTrack as MediaStreamTrack);
		}

		if (mediaType === 'video') {
			const videoTrack = remoteUser.videoTrack?.getMediaStreamTrack();
			newUsers[index].media.addTrack(videoTrack as MediaStreamTrack);
		}

		return newUsers;
	});
}

async function userUnpublished(mediaClient: IAgoraRTCClient, remoteUser: IAgoraRTCRemoteUser, mediaType: 'audio' | 'video', setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	await mediaClient.unsubscribe(remoteUser, mediaType);

	setUsers(users => {
		const newUsers = [...users];
		const index = newUsers.findIndex(user => user.id === remoteUser.uid);

		if (mediaType === 'audio' && index && newUsers.find(user => user.id === remoteUser.uid)) {
			newUsers[index].media.getAudioTracks().forEach(track => track.enabled = false);
			newUsers[index].mic = false;
		}

		if (mediaType === 'video' && index && newUsers.find(user => user.id === remoteUser.uid)) {
			newUsers[index].media.getVideoTracks().forEach(track => track.enabled = false);
			newUsers[index].video = false;
		}

		return newUsers;
	});
}