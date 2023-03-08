import { faMicrophoneSlash, faMicrophone, faVideoSlash, faVideo, faPhoneSlash, faComment } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import React from 'react';

interface Props {
	micState: boolean;
	videoState: boolean;
	chatState: boolean;
	setChatState: React.Dispatch<React.SetStateAction<boolean>>;
	toggleMic: () => void;
	toggleVideo: () => void;
	leave: () => void;
}

const Toolbar = ({ micState, videoState, chatState, setChatState, toggleMic, toggleVideo, leave }: Props): JSX.Element => {
	return (
		<div className='fixed flex w-screen justify-center items-end bottom-0 mb-9 z-0'>
			<Button
				key={'Mic'}
				active={faMicrophone}
				unable={faMicrophoneSlash}
				isActive={micState}
				activeColor={'text-main-violet'}
				unableColor={'text-main-white'}
				procedure={() => toggleMic()}
			/>

			<Button
				key={'Video'}
				active={faVideo}
				unable={faVideoSlash}
				isActive={videoState}
				activeColor={'text-main-violet'}
				unableColor={'text-main-white'}
				procedure={() => toggleVideo()}
			/>

			<Button
				key={'Close-call'}
				active={faPhoneSlash}
				unable={faPhoneSlash}
				isActive={true}
				activeColor={'text-main-red'}
				unableColor={'text-main-white'}
				procedure={() => leave()}
			/>

			<div className={`absolute right-0 mr-10 invisible md:visible ${chatState ? 'w-0' : 'w-fit'}`}>
				<div className={`transition-all duration-300 ${(chatState) ? 'translate-x-[20vw]' : 'translate-x-0'}`}>
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
		</div>
	);
};

export default Toolbar;
