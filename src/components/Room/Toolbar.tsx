import { faMicrophoneSlash, faMicrophone, faVideoSlash, faVideo, faPhoneSlash, faComment } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Button, ButtonProps } from './Button';
import React from 'react';

const Toolbar = (): JSX.Element => {
	const [videoIsActive, setVideoIsActive] = useState<boolean>(false);
	const [micIsActive, setMicIsActive] = useState<boolean>(false);
	const [chatIsActive, setChatIsActive] = useState<boolean>(false);

	const toggleMic = () => setMicIsActive(!micIsActive);
	const toggleVideo = () => setVideoIsActive(!videoIsActive);
	const toggleChat = () => setChatIsActive(!chatIsActive);
	
	const mic = {
		active: faMicrophone,
		unable: faMicrophoneSlash,
		isActive: micIsActive,
		activeColor: 'text-main-violet',
		unableColor: 'text-main-white',
		procedure: toggleMic,
	} as ButtonProps;

	const video = {
		active: faVideo,
		unable: faVideoSlash,
		isActive: videoIsActive,
		activeColor: 'text-main-violet',
		unableColor: 'text-main-white',
		procedure: toggleVideo,
	} as ButtonProps;

	const closeCall = {
		active: faPhoneSlash,
		unable: faPhoneSlash,
		isActive: true,
		activeColor: 'text-main-red',
		unableColor: 'text-main-white',
		procedure: () => console.log('')
	} as ButtonProps;

	const comment = {
		active: faComment,
		unable: faComment,
		isActive: chatIsActive,
		activeColor: 'text-main-violet',
		unableColor: 'text-main-white',
		procedure: toggleChat
	} as ButtonProps;

	return (
		<div className='fixed flex w-screen justify-center items-end bottom-0 mb-9 z-50'>
			<Button {...mic} />
			<Button {...video} />
			<Button {...closeCall} />				
			
			<div className={`absolute right-0 mr-10 invisible lg:visible ${(chatIsActive) ? 'hidden' : ''}`}>
				<Button {...comment} />
			</div>
		</div>
	);
};

export default Toolbar;
