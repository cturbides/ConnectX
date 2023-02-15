import { faMicrophoneSlash, faMicrophone, faVideoSlash, faVideo, faPhoneSlash, faComment } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonProps } from './Button';
import { User } from '../../classes/User';
import React from 'react';

interface Props {
	user: User;
	chatState:	boolean;
	setChatState: 	React.Dispatch<React.SetStateAction<boolean>>;
}

const Toolbar = ({ user, chatState, setChatState }: Props): JSX.Element => {

	const mic = {
		active: faMicrophone,
		unable: faMicrophoneSlash,
		isActive: user.micState,
		activeColor: 'text-main-violet',
		unableColor: 'text-main-white',
		procedure: () => {(user.micState) ? user.stopAudio() : user.startAudio();},
	} as ButtonProps;

	const video = {
		active: faVideo,
		unable: faVideoSlash,
		isActive: user.videoState,
		activeColor: 'text-main-violet',
		unableColor: 'text-main-white',
		procedure: () => {(user.videoState) ? user.stopVideo() : user.startVideo();},
	} as ButtonProps;
	
	const comment = {
		active: faComment,
		unable: faComment,
		isActive: chatState,
		activeColor: 'text-main-violet',
		unableColor: 'text-main-white',
		procedure: () => setChatState(!chatState)
	} as ButtonProps;

	const closeCall = {
		active: faPhoneSlash,
		unable: faPhoneSlash,
		isActive: true,
		activeColor: 'text-main-red',
		unableColor: 'text-main-white',
		procedure: () => console.log('')
	} as ButtonProps;

	return (
		<div className='fixed flex w-screen justify-center items-end bottom-0 mb-9 z-50'>
			<Button {...mic} />
			<Button {...video} />
			<Button {...closeCall} />				
			
			<div className={`absolute right-0 mr-10 invisible xl:visible ${(chatState) ? 'hidden' : ''}`}>
				<Button {...comment} />
			</div>
		</div>
	);
};

export default Toolbar;
