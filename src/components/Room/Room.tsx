import { useLocation } from 'react-router';
import { UsersFrame } from './UsersFrame';
import React, { useState } from 'react';
import { CallInfo } from './CallInfo';
import SmallLogo from '../General/SmallLogo';
import Toolbar from './Toolbar';
import Chat from './Chat';


const Room = (): JSX.Element => {
	const { user, roomID } = useLocation().state;
	// eslint-disable-next-line
	const [users, setUsers] 			= useState<string[]>([user]); // Change user-type
	// eslint-disable-next-line
	const [messages, _setMessages] 		= useState<string[]>([]);
	const [message, setMessage] 		= useState<string>('');
	const [videoState, setVideoState] 	= useState<boolean>(false);
	const [micState, setMicState] 		= useState<boolean>(false);
	const [chatState, setChatState] 	= useState<boolean>(false);

	const toolbarStates = {
		videoState,
		micState,
		chatState,
		setVideoState,
		setMicState,
		setChatState
	};

	return (
		<div className='min-h-screen h-screen w-screen flex bg-black'>
			<SmallLogo original={false} applyToggle={true} />	
			<CallInfo roomID={roomID} users={users.length}  />
			<UsersFrame users={users} />
			<Chat messages={messages} message={message} setMessage={setMessage} />
			<Toolbar {...toolbarStates} />
		</div>
	);
};

export default Room;