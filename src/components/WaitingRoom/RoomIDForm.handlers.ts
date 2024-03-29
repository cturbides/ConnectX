import { NavigateFunction } from 'react-router';

export const handleRoom = (
	event: React.FormEvent<HTMLInputElement>,
	setNewRoom: React.Dispatch<React.SetStateAction<string>>
) => {
	const userRoom: string = event.currentTarget.value;
	const formatRoom = userRoom.substring(0,3) + '-' + userRoom[3];

	(userRoom.length >= 4 && userRoom[3] != '-')
		? setNewRoom(formatRoom)
		: setNewRoom(userRoom);
};

export const handleCharacters = (event: React.ChangeEvent<HTMLInputElement>) => {
	const sevenAlphaValues = event.target.value.slice(0, 7);
	const cleanAlphaValues = sevenAlphaValues.replace(/[^\w-]|_/g, '');

	event.target.value = cleanAlphaValues;
};

export const submit = (
	event: React.FormEvent<HTMLFormElement>,
	room: string,
	username: string,
	newRoom: string,
	navigate: NavigateFunction,
) => {
	event.preventDefault();

	const UID = localStorage.getItem('UID') || Math.floor(Math.random()*1000).toString();
	
	if (!localStorage.getItem('UID')) {
		localStorage.setItem('UID', UID);
	}

	const roomID 	= (!newRoom.length) ? room : newRoom;
	const roomState = {
		state: { username, roomID, UID },
	};

	return (!newRoom.length || newRoom.length == 7)
		? navigate('/room', roomState)
		: null;
};