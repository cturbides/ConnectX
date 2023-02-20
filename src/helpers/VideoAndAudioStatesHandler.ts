import { UserProps } from '../components/Room/Users/User';
import { RtmChannel } from 'agora-rtm-sdk';
import React from 'react';


export function setUserMedia(media: MediaStream, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => {
		const newUsers = [...users];

		newUsers[0].media = media;

		return newUsers;
	});
}

export function toggleVideo(users: UserProps[], setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>, channel: RtmChannel) {
	const user = users.at(0);

	(user?.video)
		? setVideoOff(setUsers, channel)
		: setVideoOn(setUsers, channel);
}

function setVideoOn(setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>, channel: RtmChannel) {
	setUsers(values => {
		const newUsers = [...values];

		const user = newUsers.at(0);
		const media = user?.media as MediaStream;

		media.getVideoTracks().forEach(track => track.enabled = true);

		newUsers[0].media = media;
		newUsers[0].video = true;

		const message = {
			text: JSON.stringify({
				type: 'UnMuteMyVideo',
				uid: user?.id as string
			}),
		};

		channel.sendMessage(message);

		return newUsers;
	});
}

function setVideoOff(setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>, channel: RtmChannel) {
	setUsers(values => {
		const newUsers = [...values];

		const user = newUsers.at(0);
		const media = user?.media as MediaStream;

		media.getVideoTracks().forEach(track => track.enabled = false);

		newUsers[0].video = false;
		newUsers[0].media = media;

		const message = {
			text: JSON.stringify({
				type: 'MuteMyVideo',
				uid: user?.id as string
			}),
		};

		channel.sendMessage(message);

		return newUsers;
	});
}

export function toggleMic(users: UserProps[], setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>, channel: RtmChannel) {
	const user = users.at(0);

	(user?.mic as boolean)
		? setMicOff(setUsers, channel)
		: setMicOn(setUsers, channel);
}

function setMicOn(setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>, channel: RtmChannel) {
	setUsers(values => {
		const newUsers = [...values];

		const user = newUsers.at(0);
		const media = user?.media as MediaStream;

		media.getAudioTracks().forEach(track => track.enabled = true);

		newUsers[0].media = media;
		newUsers[0].mic = true;

		const message = {
			text: JSON.stringify({
				type: 'UnMuteMyMic',
				uid: user?.id as string
			}),
		};

		channel.sendMessage(message);

		return newUsers;
	});
}

function setMicOff(setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>, channel: RtmChannel) {
	setUsers(values => {
		const newUsers = [...values];

		const user = newUsers.at(0);
		const media = user?.media as MediaStream;

		media.getAudioTracks().forEach(track => track.enabled = false);

		newUsers[0].media = media;
		newUsers[0].mic = false;

		const message = {
			text: JSON.stringify({
				type: 'MuteMyMic',
				uid: user?.id as string
			}),
		};

		channel.sendMessage(message);

		return newUsers;
	});
}