import { WaitingRoomStep } from './WaitingRoom';

export const submit = (
	event: React.FormEvent<HTMLFormElement>,
	setStep: React.Dispatch<React.SetStateAction<WaitingRoomStep>>,
	user: string
) => {
	event.preventDefault();
	if (user.length) setStep('roomID');
};

export const handleUser = (
	event: React.FormEvent<HTMLInputElement>,
	setUser: React.Dispatch<React.SetStateAction<string>>
) => {
	setUser(event.currentTarget.value);
};

export const handleOverflow = (event: React.ChangeEvent<HTMLInputElement>) => {
	const value = event.target.value.slice(0, 11);
	event.target.value = value.replace(/[^\w]|_/g, '');
};