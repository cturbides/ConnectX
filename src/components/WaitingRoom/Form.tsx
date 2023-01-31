import { WaitingRoomStep } from './WaitingRoom.props';
import { useState } from 'react';
import UsernameForm from './UsernameForm';
import RoomIDForm from './RoomIDForm';
import React from 'react';

const Form = (): JSX.Element => {
	const [step, setStep] = useState<WaitingRoomStep>('username');
	const [user, setUser] = useState<string>('');
	const [room, setRoom] = useState<string>('');

	return (step === 'username') 
		? <UsernameForm user={user} setUser={setUser} setStep={setStep} />
		: <RoomIDForm   user={user} setRoom={setRoom} room={room} />;
};

export default Form;
