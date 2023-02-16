import React from 'react';

type MessageProps = {
    username: 'Me' | string;
	content: string;
};

export const Message = ({ username, content}: MessageProps): JSX.Element => {
	const userCircle: JSX.Element = (
		<div className='h-[40px] w-[40px] rounded-full border-main-white hover:border-main-violet focus:border-main-violet ease-in-out duration-300 border-[1px] text-center font-ramabhadra text-xl'>
			<h4 className='mt-[4px]'>{username.charAt(0).toUpperCase()}</h4>
		</div>
	);

	return (
		<div className='w-full mb-5'>
			<div className='ml-[28px] text-main-white flex'>
				<div id='nameLetter' className='mr-[11px]'>
					{(username == 'Me' ? <></> : userCircle)}
				</div>
				<div id='messageContent'>
					<div id='author' className='text-md font-bold font-ramabhadra'>
						<h2 className={`${username == 'Me' ? 'text-right pr-[25px]' : ''}`}>{username}</h2>
					</div>
					<div id='content' className={`text-justify text-sm ${(username == 'Me') ? 'pr-[25px] pl-[40px]' : 'pr-[25px]'}`}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
