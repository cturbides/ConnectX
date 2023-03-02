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

	console.log('Mensaje: ', message);
	await channel.sendMessage(peerMessage);

	setMessages(messages => [...messages, message]);
};

export const addMessage = (message: Message, setMessages: React.Dispatch<React.SetStateAction<Message[]>>) => {
	console.log('Mensaje: ', message);
	setMessages(messages => [...messages, message]);
};
