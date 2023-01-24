import { generateRandomRoomID } from '../../utils/randomRoomID';
import { RoomIDFormProps } from '../../utils/types';
import React, {useEffect, useState} from 'react';
import Title from './Title';

const RoomIDForm = (props: RoomIDFormProps): JSX.Element => {
	const user = props.user;
	const room = props.room;
	const setRoom = props.setRoom;
	const [newRoom, setNewRoom] = useState('');

	const handleRoomID = (event: React.FormEvent<HTMLInputElement>) => {
		const userRoomValue: string = event.currentTarget.value;

		(userRoomValue.length == 4 && userRoomValue[3] != '-') ?
			setNewRoom(userRoomValue.substring(0,3) + '-' + userRoomValue[3]) :
			setNewRoom(event.currentTarget.value);
	};

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// do whatever
	};

	useEffect(() => setRoom(generateRandomRoomID()), []);

	return (
		<div>
			<Title step="roomID" />
			<form onSubmit={submit}>
				<input 	type="text" name="roomID"  id="roomID"
						placeholder={room} value={newRoom}
						onChange={handleRoomID}
						maxLength={7}
				/>
				<button type="submit">Continue</button>
			</form>
		</div>
	);
};

export default RoomIDForm;
