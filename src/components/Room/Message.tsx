import React from 'react';

type MessageProps = {
    content: string;
    user: 'me' | string;   // TODO: Change user type
};

const Message = ({ content, user}: MessageProps): JSX.Element => {
	const upperNameFirstLetter = user.charAt(0).toUpperCase();
	
	const userCircle: JSX.Element = (
		<div className='h-[40px] w-[40px] rounded-full border-main-white hover:border-main-violet focus:border-main-violet ease-in-out duration-300 border-[1px] text-center font-ramabhadra text-xl'>
			<h4 className='mt-[4px]'>{upperNameFirstLetter}</h4>
		</div>
	);

	return (
		<div className='w-full mb-5'>
			<div className='ml-[28px] text-main-white flex'>
				<div id='nameLetter' className='mr-[11px]'>
					{(user == 'me' ? <></> : userCircle)}
				</div>
				<div id='messageContent'>
					<div id='author' className='text-md font-bold font-ramabhadra'>
						<h2 className={`${user == 'me' ? 'text-right pr-[25px]' : ''}`}>{user}</h2>
					</div>
					<div id='content' className={`text-justify text-sm ${(user == 'me') ? 'pr-[25px] pl-[40px]' : 'pr-[25px]'}`}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;