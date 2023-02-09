import { useLocation } from 'react-router';
import { UsersFrame } from './UsersFrame';
import React, {useState} from 'react';
import { CallInfo } from './CallInfo';
import SmallLogo from '../General/SmallLogo';
import Toolbar from './Toolbar';
import Chat from './Chat';


const Room = (): JSX.Element => {
	const { user, roomID } = useLocation().state;
	// eslint-disable-next-line
	const [users, _setUsers] 		= useState<string[]>([user]); // Change user-type
	// eslint-disable-next-line
	const [messages, _setMessages] 	= useState<string[]>([]);
	const [message, setMessage] 	= useState<string>('');

	return (
		<div className='min-h-screen h-screen w-screen flex bg-black'>
			<SmallLogo original={false} applyToggle={true} />	
			<CallInfo roomID={roomID} users={users.length}  />
			<UsersFrame users={users} />
			<Chat messages={messages} message={message} setMessage={setMessage} />
			<Toolbar />
		</div>
	);
};

export default Room;