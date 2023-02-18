import { createRtmClient, createChannel, channelLogin } from '../../helpers/AgoraClient';
import { toggleMic, toggleVideo } from '../../helpers/VideoAndAudioStatesHandler';
import { setMessageHandlers } from '../../helpers/RtmMessagesHandler';
import { onlineHandler } from '../../helpers/RoomStateHandlers';
import { Information } from './Information/Information';
import { RtmClient, RtmChannel } from 'agora-rtm-sdk';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { UserProps } from './Users/User';
import { Users } from './Users/Users';
import SmallLogo from '../General/SmallLogo';
import Toolbar from './Toolbar/Toolbar';
import Chat from './Chat/Chat';

const Room = (): JSX.Element => {
	const { username, roomID, UID } = useLocation().state;

	const [rtmClient] = useState<RtmClient>(createRtmClient());
	const [channel] = useState<RtmChannel>(createChannel(rtmClient, roomID));
	
	const [online, setOnline] = useState<boolean>(false);

	const [messages] = useState<string[]>([]);
	const [message, setMessage] = useState<string>('');
	const [chatVisibility, setChatVisibility] = useState<boolean>(false);

	const [users, setUsers] = useState<UserProps[]>([
		{ id: UID, name: username, isLocal: true, media: new MediaStream(), mic: false, video: false }
	]);

	useEffect(() => {
		onlineHandler(rtmClient, setOnline);

		rtmClient.login({ uid: UID })
			.then(() => channelLogin(channel))
			.then(() => setMessageHandlers(rtmClient, channel as RtmChannel, UID, username, setUsers));
	}, []);

	return (
		<div className='min-h-screen h-screen w-screen flex bg-black'>
			<SmallLogo original={false} applyToggle={true} />

			<Users users={users} />

			<Chat
				chatState={chatVisibility}
				messages={messages}
				message={message}
				setMessage={setMessage}
				setChatState={setChatVisibility}
			/>

			<Toolbar
				micState={users[0].mic}
				videoState={users[0].video}
				chatState={chatVisibility}
				setChatState={setChatVisibility}
				toggleMic={() => toggleMic(users, setUsers, channel)}
				toggleVideo={() => toggleVideo(users, setUsers, channel)}
			/>

			<Information
				online={online}
				roomID={roomID}
				users={users.length}
			/>
		</div>
	);
};

export default Room;