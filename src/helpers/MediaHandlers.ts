import { UserProps } from '../components/Room/Users/User';

export function unMuteMyVideo(uid: string, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => {
		const newUsers = [...users];
		const alterUser = users.find(user => user.id === uid);

		if (alterUser) {
			const index = newUsers.findIndex(user => user.id === alterUser.id);

			alterUser.video = true;
			newUsers[index] = alterUser;
		}

		return newUsers;
	});
}

export function unMuteMyMic(uid: string, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => {
		const newUsers = [...users];
		const alterUser = users.find(user => user.id === uid);

		if (alterUser) {
			const index = newUsers.findIndex(user => user.id === alterUser.id);

			alterUser.mic = true;
			newUsers[index] = alterUser;
		}

		return newUsers;
	});
}

export function muteUserMic(uid: string, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => {
		const newUsers = [...users];
		const alterUser = users.find(user => user.id === uid);

		if (alterUser) {
			const index = newUsers.findIndex(user => user.id === alterUser.id);

			alterUser.mic = false;
			newUsers[index] = alterUser;
		}

		return newUsers;
	});
}

export function muteUserVideo(uid: string, setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>) {
	setUsers(users => {
		const newUsers = [...users];
		const alterUser = users.find(user => user.id === uid);

		if (alterUser) {
			const index = newUsers.findIndex(user => user.id === alterUser.id);

			alterUser.video = false;
			newUsers[index] = alterUser;
		}

		return newUsers;
	});
}