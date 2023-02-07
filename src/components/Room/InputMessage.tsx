import React from 'react';
import { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputMessage = (): JSX.Element => {
	const [message, setMessage] = useState<string>('');

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const handleChange = () => {
		setMessage(message);
	};

	return (
		<div className='absolute bottom-0 w-full'>
			<div className='w-full mb-[18px] flex items-center justify-center'>
				<form onSubmit={submit} className='w-[260] border-b-main-white border-b-[2px]'>
					<input
						type="text"
						placeholder='Say "Hello"'
						onChange={handleChange}
						className='pb-[3px] pr-[3px] w-[250px] bg-transparent text-main-white text-[14px] font-ramabhadra outline-none placeholder:text-gray-500' 
					/>
					<button type='submit' className='cursor-pointer'>
						<FontAwesomeIcon icon={faPaperPlane} className='text-main-white' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default InputMessage;
