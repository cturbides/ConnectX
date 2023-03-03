import React from 'react';
import { Message } from '../../../helpers/MessageHandlers';

export const MessageTile = ({ username, content }: Message): JSX.Element => {
	const userCircle: JSX.Element = (
		<div className='h-[40px] w-[40px] rounded-full border-main-white hover:border-main-violet focus:border-main-violet ease-in-out duration-300 border-[1px] text-center font-ramabhadra text-xl'>
			<h4 className='mt-[4px]'>{username.charAt(0).toUpperCase()}</h4>
		</div>
	);

	const isMe = username == 'Me';

	return (
		<div className='max-w-full mb-5 overflow-auto'>
			<div className='text-main-white flex'>

				<div id='nameLetter' className='mr-[11px]'>
					{(isMe ? <></> : userCircle)}
				</div>

				<div id='messageContent' className='w-full'>
					<div id='author' className='text-md font-bold font-ramabhadra'>
						<h2 className={`pr-[25px] ${isMe ? 'text-right' : 'text-left'}`}>{username}</h2>
					</div>
					<div id='content' className={`text-sm pr-[25px] ${isMe ? 'text-right' : 'text-left'}`}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
