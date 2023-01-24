import { useState } from 'react';
import { WaitingRoomStep } from '../../utils/types';
import React from 'react';
import RoomIDForm from './RoomIDForm';
import UsernameForm from './UsernameForm';

const Form = (): JSX.Element => {
	const [step, setStep] = useState<WaitingRoomStep>('username');
	const [user, setUser] = useState<string>('');
	const [room, setRoom] = useState<string>('');

	return (step === 'username') 
		? <UsernameForm user={user} setUser={setUser} setStep={setStep} />
		: <RoomIDForm   user={user} setRoom={setRoom} room={room} />;
};

export default Form;
