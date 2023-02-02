import { UsersFrameProps } from './UsersFrame.props';
import { useState, useEffect } from 'react';
import Frame from './Frame';
import React from 'react';

const UsersFrame = ({ users }: UsersFrameProps): JSX.Element => {
	const [ usersToShow, setUsersToShow ] = useState<string[]>([]);

	useEffect(() => {
		(window.innerWidth <= 760) ? setUsersToShow([...users].slice(0,3)) : setUsersToShow([...users]);
	}, []);

	useEffect(() => {
		const handleWindowResize = () => (window.innerWidth <= 770)
			? setUsersToShow([...users].slice(0,3))
			: (users.length > usersToShow.length)
				? setUsersToShow([...users])
				: null;
    
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, [users, usersToShow]);

	return (
		<div className='text-main-white w-screen h-[700px] md:h-2/3 max-h-[700px] my-auto mx-5 flex flex-wrap flex-col md:flex-row justify-center items-center gap-5 overflow-hidden'>
			{usersToShow.map((user, index) => <Frame user={user} micIsActive={false /**user.getMicrophoneState() */} videoIsActive={false /**user.getCameraState() */} key={index} />)}
		</div>
	);
};

export default UsersFrame;
