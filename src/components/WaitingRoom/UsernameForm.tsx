import { submit, handleUser, handleOverflow } from './UsernameForm.handlers';
import { WaitingRoomStep } from './WaitingRoom';
import Title from './Title';
import React from 'react';

export type UsernameFormProps = {
    user: string;
    setStep: React.Dispatch<React.SetStateAction<WaitingRoomStep>>;
    setUser: React.Dispatch<React.SetStateAction<string>>;
};

export const UsernameForm = ({user, setStep, setUser}: UsernameFormProps): JSX.Element => {
	return (
		<div className='h-screen min-h-screen flex items-center justify-center flex-col'>
			<Title step='username' />
			<form onSubmit={(event) => submit(event, setStep, user)}>
				<input
					id="user" 
					type="text" 
					name="user" 
					value={user} 
					onInput={handleOverflow} 
					pattern="[A-Za-z0-9]+"
					onChange={(event) => handleUser(event, setUser)} 
					autoFocus
					className='w-full bg-main-white text-center text-main-violet font-thin caret-black font-ranga focus:outline-none mb-2 text-7xl lg:text-8xl overflow-x-hidden'
					spellCheck="false" 
					autoCorrect="off"  
					autoComplete='off'
					autoCapitalize="off" 
				/>
				<br />
				<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
					<button 
						type="submit"
						className='cursor-pointer bg-main-black hover:bg-main-violet active:bg-main-violet text-main-white mt-5 p-2 w-64 rounded-xl lg:w-96 ease-in-out duration-300'>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};
