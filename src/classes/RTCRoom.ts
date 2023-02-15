import { User } from './User';
import { RtmClient, RtmChannel } from 'agora-rtm-sdk';

export class RTCRoom {
	id: string;
	users: User[];
	isConnected: boolean;
	agoraClient: RtmClient;
	channel: RtmChannel | undefined;
	peerConnection: RTCPeerConnection;
	setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;

	constructor(id: string, agoraClient: RtmClient, peerConnection: RTCPeerConnection,  users: User[], isConnected: boolean, setUsers: React.Dispatch<React.SetStateAction<User[]>>, setConnected: React.Dispatch<React.SetStateAction<boolean>>) {
		this.id = id;
		this.agoraClient = agoraClient as RtmClient;
		this.peerConnection = peerConnection as RTCPeerConnection;

		this.isConnected = isConnected;
		this.users = users;
		this.setUsers = setUsers;
		this.setIsConnected = setConnected;
	}

	public login() {
		this.enter()
			.then(() => this.setIsConnected(() => {
				this.isConnected = true;
				return true;
			}))
			.catch(() => this.setIsConnected(() => {
				this.isConnected = false;
				return false;
			}));
	}

	private async enter() {
		await this.agoraClient.login({ uid: Math.floor(Math.random()*1000).toString() });

		this.channel = this.agoraClient.createChannel(this.id);
		await this.channel?.join();
	}	
	
	public async logout() {
		await this.channel?.leave();
		await this.agoraClient.logout();
		this.peerConnection.close();
		this.setIsConnected(false);
	}

	public addUser(user: User) {
		const usersCopy = [...this.users];
		usersCopy.push(user);

		this.setUsers(usersCopy);
	}

	public removeUser(uid: string) {
		this.setUsers(this.users.filter(user => user.id != uid));
	}
}