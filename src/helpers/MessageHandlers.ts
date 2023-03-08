import { RtmChannel } from 'agora-rtm-sdk';

export type Message = {
	username: string;
	content: string;
};

export const sendMessage = async (channel: RtmChannel, message: Message, setMessages: React.Dispatch<React.SetStateAction<Message[]>>) => {
	const peerMessage = {
		text: JSON.stringify({
			type: 'Message',
			username: message.username,
			content: message.content,
		})
	};

	await channel.sendMessage(peerMessage);

	setMessages(messages => [...messages, message]);
};

export const addMessage = (message: Message, setMessages: React.Dispatch<React.SetStateAction<Message[]>>) => {
	setMessages(messages => [...messages, message]);
};
