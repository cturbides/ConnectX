import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Message } from '../../../helpers/MessageHandlers';

interface MessageInputProps {
	message: Message;
	setMessage: React.Dispatch<React.SetStateAction<Message>>;
	sendMessage: () => Promise<void>;
}

export const MessageInput = ({ message, setMessage, sendMessage }: MessageInputProps): JSX.Element => {
	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		sendMessage()
			.then(() => {
				setMessage(message => {
					return {
						username: message.username,
						content: '',
					} as Message;
				});
			});
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(message => {
		const content = event.target.value as string;

		return {
			username: message.username,
			content,
		} as Message;
	});

	return (
		<div className='absolute bottom-0 w-full'>
			<div className='w-full mb-[18px] flex items-center justify-center'>
				<form onSubmit={submit} className='w-[260] border-b-main-white border-b-[2px]'>
					<input
						type="text"
						placeholder='Say "Hello"'
						onChange={handleChange}
						value={message.content}
						className='pb-[3px] pr-[3px] w-[250px] bg-transparent text-main-white text-[14px] font-ramabhadra outline-none placeholder:text-gray-500'
					/>
					<button type='submit' className='cursor-pointer'>
						<FontAwesomeIcon icon={faPaperPlane} className='text-main-white hover:text-main-violet focus:text-main-violet ease-in-out duration-300' />
					</button>
				</form>
			</div>
		</div>
	);
};
