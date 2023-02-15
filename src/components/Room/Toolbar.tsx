import { faMicrophoneSlash, faMicrophone, faVideoSlash, faVideo, faPhoneSlash, faComment } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import { User } from '../../classes/User';
import React from 'react';

interface Props {
	user: User;
	chatState: boolean;
	setChatState: React.Dispatch<React.SetStateAction<boolean>>;
	logout: () => void;
}

const Toolbar = ({ user, chatState, setChatState, logout }: Props): JSX.Element => {
	return (
		<div className='fixed flex w-screen justify-center items-end bottom-0 mb-9 z-50'>
			<Button
				key={'Mic'}
				active={faMicrophone}
				unable={faMicrophoneSlash}
				isActive={user.micState}
				activeColor={'text-main-violet'}
				unableColor={'text-main-white'}
				procedure={() => { (user.micState) ? user.stopAudio() : user.startAudio(); }}
			/>

			<Button
				key={'Video'}
				active={faVideo}
				unable={faVideoSlash}
				isActive={user.videoState}
				activeColor={'text-main-violet'}
				unableColor={'text-main-white'}
				procedure={() => { (user.videoState) ? user.stopVideo() : user.startVideo(); }}
			/>

			<Button
				key={'Close-Call'}
				active={faPhoneSlash}
				unable={faPhoneSlash}
				isActive={true}
				activeColor={'text-main-red'}
				unableColor={'text-main-white'}
				procedure={logout}
			/>

			<div className={`absolute right-0 mr-10 invisible xl:visible ${(chatState) ? 'hidden' : ''}`}>
				<Button
					key={'Comment'}
					active={faComment}
					unable={faComment}
					isActive={chatState}
					activeColor={'text-main-violet'}
					unableColor={'text-main-white'}
					procedure={() => setChatState(!chatState)}
				/>
			</div>
		</div>
	);
};

export default Toolbar;
