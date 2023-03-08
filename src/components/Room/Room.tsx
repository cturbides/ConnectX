import { createRtmClient, createChannel, createMediaClient, channelLogin, mediaLogin, getDevices, logout } from '../../helpers/AgoraClient';
import { setUserMedia, toggleMic, toggleVideo } from '../../helpers/VideoAndAudioStatesHandler';
import { setMediaHandlers, sendMicState, sendVideoState } from '../../helpers/RtcDataHandlers';
import { IAgoraRTCClient, ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';
import { setMessageHandlers } from '../../helpers/RtmMessagesHandler';
import { Message, sendMessage } from '../../helpers/MessageHandlers';
import { onlineHandler } from '../../helpers/RoomStateHandlers';
import { useLocation, useNavigate } from 'react-router';
import { Information } from './Information/Information';
import { RtmClient, RtmChannel } from 'agora-rtm-sdk';
import React, { useState, useEffect } from 'react';
import SmallLogo from '../General/SmallLogo';
import { UserProps } from './Users/User';
import Toolbar from './Toolbar/Toolbar';
import { Users } from './Users/Users';
import Chat from './Chat/Chat';

const Room = (): JSX.Element => {
	const { username, roomID, UID } = useLocation().state;
	const navigate = useNavigate();

	const [mediaClient] = useState<IAgoraRTCClient>(createMediaClient());
	const [rtmClient] = useState<RtmClient>(createRtmClient());
	const [channel] = useState<RtmChannel>(createChannel(rtmClient, roomID));

	const [micTrack, setMicTrack] = useState<IMicrophoneAudioTrack>();
	const [videoTrack, setVideoTrack] = useState<ICameraVideoTrack>();

	const [online, setOnline] = useState<boolean>(false);

	const [messages, setMessages] = useState<Message[]>([]);
	const [message, setMessage] = useState<Message>({ username, content: '' });
	const [chatVisibility, setChatVisibility] = useState<boolean>(false);

	const [users, setUsers] = useState<UserProps[]>([
		{
			id: UID,
			name: username,
			isLocal: true,
			media: new MediaStream(),
			mic: false,
			video: false
		}
	]);

	useEffect(() => {
		onlineHandler(rtmClient, setOnline);

		rtmClient.login({ uid: UID })
			.then(() => channelLogin(channel))
			.then(() => setMessageHandlers(rtmClient, channel as RtmChannel, UID, username, setUsers, setMessages))
			.then(() => mediaLogin(mediaClient, roomID, UID))
			.then(() => setMediaHandlers(mediaClient, setUsers))
			.then(() => getDevices().then(tracks => {
				const micTrack = tracks[0] as IMicrophoneAudioTrack;
				const videoTrack = tracks[1] as ICameraVideoTrack;

				const media = new MediaStream();

				media.addTrack(micTrack.getMediaStreamTrack());
				media.addTrack(videoTrack.getMediaStreamTrack());

				media.getAudioTracks().forEach(track => track.enabled = false);
				media.getVideoTracks().forEach(track => track.enabled = false);

				setUserMedia(media, setUsers);

				setMicTrack(micTrack);
				setVideoTrack(videoTrack);

				mediaClient.publish(tracks);
			}));
	});

	useEffect(() => {
		const exit = (event: Event) => {
			event.preventDefault();
			(async () => await logout(rtmClient, channel, mediaClient, micTrack as IMicrophoneAudioTrack, videoTrack as ICameraVideoTrack, UID))();
		};

		window.addEventListener('unload', exit);
	});

	useEffect(() => {
		sendMicState(channel, users.at(0) as UserProps);
		sendVideoState(channel, users.at(0) as UserProps);
	}, [users.length]);

	return (
		<div className='min-h-screen h-screen w-screen flex bg-black'>
			<SmallLogo
				original={false}
				applyToggle={true}
				exit={() => logout(rtmClient, channel, mediaClient, micTrack as IMicrophoneAudioTrack, videoTrack as ICameraVideoTrack, UID).then(() => navigate('/'))}
			/>

			<Users users={users} />

			<Chat
				username={username}
				chatState={chatVisibility}
				messages={messages}
				message={message}
				setMessage={setMessage}
				setChatState={setChatVisibility}
				sendMessage={async () => await sendMessage(channel, message, setMessages)}
			/>

			<Toolbar
				micState={users[0].mic}
				videoState={users[0].video}
				chatState={chatVisibility}
				setChatState={setChatVisibility}
				toggleMic={() => toggleMic(users, setUsers, channel)}
				toggleVideo={() => toggleVideo(users, setUsers, channel)}
				leave={() => logout(rtmClient, channel, mediaClient, micTrack as IMicrophoneAudioTrack, videoTrack as ICameraVideoTrack, UID).then(() => navigate('/'))}
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