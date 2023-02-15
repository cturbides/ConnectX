import { useState, useEffect } from 'react';
import { Frame } from './Frame';
import { User } from '../../classes/User';
import React from 'react';

export type UsersFrameProps = {
    users: Array<User>;
};

export const UsersFrame = ({ users }: UsersFrameProps): JSX.Element => {
	const [ usersToShow, setUsersToShow ] = useState<User[]>([]);

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
		<div className='text-main-white w-screen h-full transition-all duration-300 md:h-2/3 max-h-[700px] my-auto mx-5 flex flex-wrap flex-col md:flex-row justify-center items-center gap-5 overflow-hidden'>
			{usersToShow.map((user, index) => <Frame user={user} key={index} />)}
		</div>
	);
};
