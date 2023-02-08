import { useLocation } from 'react-router';
import { UsersFrame } from './UsersFrame';
import { CallInfo } from './CallInfo';
import SmallLogo from '../General/SmallLogo';
import Toolbar from './Toolbar';
import Chat from './Chat';
import React from 'react';

const Room = (): JSX.Element => {
	const location = useLocation();
	const {user, roomID} = location.state;

	return (
		<div className='min-h-screen h-screen w-screen flex bg-black'>
			<SmallLogo original={false} applyToggle={true} />	
			<CallInfo roomID={roomID} users={1}  />
			<UsersFrame users={[user, 'Daniel', 'can34r', 'Laura']} />
			<Chat />
			<Toolbar />
		</div>
	);
};

export default Room;