import { generateRandomRoomID } from '../../helpers/randomRoomID';
import { RoomIDFormProps } from '../../utils/types';
import { useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import Title from './Title';

const RoomIDForm = (props: RoomIDFormProps): JSX.Element => {
	const user = props.user;
	const room = props.room;
	const setRoom = props.setRoom;
	const navigate = useNavigate();
	const [newRoom, setNewRoom] = useState('');

	const buttonMessage = (!newRoom.length) ? 'Create room' : 'Continue';

	const handleRoomID = (event: React.FormEvent<HTMLInputElement>) => {
		const userRoomValue: string = event.currentTarget.value;

		(userRoomValue.length >= 4 && userRoomValue[3] != '-') ?
			setNewRoom(userRoomValue.substring(0, 3) + '-' + userRoomValue[3]) :
			setNewRoom(event.currentTarget.value);
	};

	const checkOverflow = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sevenAlphaValues = event.target.value.slice(0, 7);
		const cleanAlphaValues = sevenAlphaValues.replace(/[^\w-]|_/g, '');
		event.target.value = cleanAlphaValues;
	};

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!newRoom.length)
			return navigate('/room', {
				state: {
					username: user,
					roomID: room,
				},
			});

		if (newRoom.length == 7)
			return navigate('/room', {
				state: {
					username: user,
					roomID: newRoom,
				}
			});
	};

	useEffect(() => setRoom(generateRandomRoomID()), []);

	return (
		<div className='h-screen flex items-center justify-center flex-col'>
			<Title step="roomID" />
			<form onSubmit={submit}>
				<input className='bg-main-white text-center text-main-violet font-thin caret-black font-ranga focus:outline-none mb-2 text-7xl lg:text-8xl overflow-hidden'
					type="text" name="roomID" id="roomID"
					placeholder={room} value={newRoom} onChange={handleRoomID} onInput={checkOverflow} pattern="[A-Za-z0-9]+"
					autoCorrect="off" autoCapitalize="off" spellCheck="false" autoComplete='off'
				/>
				<br />
				<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
					<button type="submit" className='cursor-pointer bg-main-black hover:bg-main-violet active:bg-main-violet text-main-white mt-5 p-2 w-64 rounded-xl lg:w-96 ease-in-out duration-300'>
						{buttonMessage}
					</button>
				</div>
			</form>
		</div>
	);
};

export default RoomIDForm;
