import { UsernameFormProps } from '../../utils/types';
import Title from './Title';
import React from 'react';

const UsernameForm = (props: UsernameFormProps): JSX.Element => {
	const user = props.user;
	const setStep = props.setStep;
	const setUser = props.setUser;

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStep('roomID');
	};
    
	const changeUser = (event: React.FormEvent<HTMLInputElement>) => {
		setUser(event.currentTarget.value);
	};

	return (
		<div>
			<Title step='username' />
			<form onSubmit={submit}>
				<input  type="text" name="user" value={user} id="user" onChange={changeUser} />
				<button type="submit">Continue</button>
			</form>
		</div>
	);
};

export default UsernameForm;
