import { UsernameFormProps } from '../../utils/types';
import Title from './Title';
import React from 'react';

const UsernameForm = (props: UsernameFormProps): JSX.Element => {
	const user = props.user;
	const setStep = props.setStep;
	const setUser = props.setUser;

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (user.length) setStep('roomID');
	};
    
	const changeUser = (event: React.FormEvent<HTMLInputElement>) => {
		setUser(event.currentTarget.value);
	};

	return (
		<div className='h-screen min-h-screen flex items-center justify-center flex-col'>
			<Title step='username' />
			<form onSubmit={submit} className=''>
				<input  className='text-center text-main-violet font-thin caret-black font-ranga focus:outline-none mb-2 text-7xl lg:text-8xl overflow-hidden'
						autoFocus autoComplete='off' type="text" name="user" value={user} id="user" onChange={changeUser} maxLength={20}
				/>
				<br />
				<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
					<button type="submit" className='cursor-pointer bg-main-black hover:bg-main-violet active:bg-main-violet text-main-white mt-5 p-2 w-64 rounded-xl lg:w-96 ease-in-out duration-300'>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default UsernameForm;
