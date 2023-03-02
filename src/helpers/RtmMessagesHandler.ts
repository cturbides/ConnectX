import { unMuteMyMic, unMuteMyVideo, muteUserMic, muteUserVideo } from './MediaHandlers';
import { RtmChannel, RtmClient, RtmMessage } from 'agora-rtm-sdk';
import { UserProps } from '../components/Room/Users/User';
import { addMessage, Message } from './MessageHandlers';
import React from 'react';

type Response = {
	type: 'AddMe' | 'AddMeBack' | 'MuteMyMic' | 'MuteMyVideo' | 'UnMuteMyMic' | 'UnMuteMyVideo' | 'Left' | 'Message';
	uid: string;
	username: string;
	content: string | null;
};

export function setMessageHandlers(
	rtmClient: RtmClient,
	channel: RtmChannel,
	UID: string,
	username: string,
	setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>,
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
	const handlerMemberJoin = (memberID: string) => memberJoined(memberID, rtmClient, UID, username);
	const handlerMessages = (message: RtmMessage, memberID: string) => messageHandler(message, memberID, UID, username, rtmClient, setUsers, setMessages);

	channel.on('MemberJoined', handlerMemberJoin);
	channel.on('ChannelMessage', handlerMessages);
	rtmClient.on('MessageFromPeer', handlerMessages);
}

function messageHandler(
	message: RtmMessage,
	memberID: string,
	uid: string,
	username: string,
	rtmClient: RtmClient,
	setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>,
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
	const response = JSON.parse(message.text || '') as Response;

	switch (response.type) {
	case 'AddMe':
		createUser(response.uid, response.username, setUsers);
		addMeBack(memberID, rtmClient, uid, username);
		break;
	case 'AddMeBack':
		createUser(response.uid, response.username, setUsers);
		break;
	case 'MuteMyMic':
		muteUserMic(response.uid, setUsers);
		break;
	case 'MuteMyVideo':
		muteUserVideo(response.uid, setUsers);
		break;
	case 'UnMuteMyMic':
		unMuteMyMic(response.uid, setUsers);
		break;
	case 'UnMuteMyVideo':
		unMuteMyVideo(response.uid, setUsers);
		break;
	case 'Left':
		deleteUser(response.uid, setUsers);
		break;
	case 'Message':
		addMessage({ username: response.username, content: response.content as string } as Message, setMessages);
		break;
	}
}

function deleteUser(uid: string, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => [...users].filter(user => user.id !== uid));
}

function createUser(uid: string, username: string, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	const newUser = {
		id: uid,
		name: username,
		isLocal: false,
		media: new MediaStream(),
		mic: false,
		video: false
	} as UserProps;

	setUsers(users => {
		return (!users.find(user => user.id === uid))
			? [...users, newUser]
			: [...users];
	});
}

function memberJoined(memberID: string, rtmClient: RtmClient, uid: string, username: string) {
	const message = {
		text: JSON.stringify({
			type: 'AddMe',
			uid,
			username
		}),
	};

	rtmClient.sendMessageToPeer(message, memberID);
}

function addMeBack(memberID: string, rtmClient: RtmClient, uid: string, username: string) {
	const message = {
		text: JSON.stringify({
			type: 'AddMeBack',
			uid,
			username
		}),
	};

	rtmClient.sendMessageToPeer(message, memberID);
}
