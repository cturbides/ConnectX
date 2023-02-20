import { createRtmClient, createChannel, createMediaClient, channelLogin, mediaLogin, getDevices, logout } from '../../helpers/AgoraClient';
import { setUserMedia, toggleMic, toggleVideo } from '../../helpers/VideoAndAudioStatesHandler';
import { IAgoraRTCClient, ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';
import { setMediaHandlers } from '../../helpers/RtcDataHandlers';
import { setMessageHandlers } from '../../helpers/RtmMessagesHandler';
import { onlineHandler } from '../../helpers/RoomStateHandlers';
import { Information } from './Information/Information';
import { RtmClient, RtmChannel } from 'agora-rtm-sdk';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { UserProps } from './Users/User';
import { Users } from './Users/Users';
import SmallLogo from '../General/SmallLogo';
import Toolbar from './Toolbar/Toolbar';
import Chat from './Chat/Chat';


const Room = (): JSX.Element => {
	const { username, roomID, UID } = useLocation().state;
	const navigate = useNavigate();

	const [mediaClient] = useState<IAgoraRTCClient>(createMediaClient());
	const [rtmClient] = useState<RtmClient>(createRtmClient());
	const [channel] = useState<RtmChannel>(createChannel(rtmClient, roomID));

	const [online, setOnline] = useState<boolean>(false);

	const [messages] = useState<string[]>([]);
	const [message, setMessage] = useState<string>('');
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
			.then(() => setMessageHandlers(rtmClient, channel as RtmChannel, UID, username, setUsers))
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

				mediaClient.publish(tracks);
			}));
	});

	useEffect(() => {
		const exit = (event: Event) => {
			event.preventDefault();
			(async () => await logout(rtmClient, channel, mediaClient, UID))();
		};

		window.addEventListener('unload', exit);
	});

	return (
		<div className='min-h-screen h-screen w-screen flex bg-black'>
			<SmallLogo
				original={false}
				applyToggle={true}
				exit={() => logout(rtmClient, channel, mediaClient, UID).then(() => navigate('/'))}
			/>

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
				leave={() => logout(rtmClient, channel, mediaClient, UID).then(() => navigate('/'))}
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