import { handleRoom, handleCharacters, submit } from './RoomIDForm.handlers';
import React, { useEffect, useState } from 'react';
import { generateRandomRoomID } from '../../helpers/randomRoomID';
import { RoomIDFormProps } from './WaitingRoom.props';
import { useNavigate } from 'react-router';
import Title from './Title';

const RoomIDForm = ({ 
	user, 
	room, 
	setRoom 
}: RoomIDFormProps): JSX.Element => {
	const [newRoom, setNewRoom] = useState('');
	const navigate 				= useNavigate();

	useEffect(() => setRoom(generateRandomRoomID()), []);

	return (
		<div className='h-screen flex items-center justify-center flex-col'>
			<Title step="roomID" />
			<form onSubmit={(event) => submit(event, room, user, newRoom, navigate)}>
				<input 
					className='bg-main-white text-center text-main-violet font-thin caret-black font-ranga focus:outline-none mb-2 text-7xl lg:text-8xl overflow-hidden'
					id="roomID"
					type="text" 
					name="roomID" 
					value={newRoom} 
					onInput={handleCharacters}
					onChange={(event) => handleRoom(event, setNewRoom)}
					spellCheck="false"
					placeholder={room}
					autoCorrect="off" 
					autoComplete='off'
					autoCapitalize="off" 
				/>
				<br />
				<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
					<button 
						type="submit" 
						className='cursor-pointer bg-main-black hover:bg-main-violet active:bg-main-violet text-main-white mt-5 p-2 w-64 rounded-xl lg:w-96 ease-in-out duration-300'>
						{(!newRoom.length) ? 'Create room' : 'Continue'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default RoomIDForm;
