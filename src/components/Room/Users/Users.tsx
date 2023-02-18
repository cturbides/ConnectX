import { useState, useEffect } from 'react';
import { User } from './User';
import { UserProps } from './User';
import React from 'react';

export type UsersProps = {
	users: Array<UserProps>;
};

export const Users = ({ users }: UsersProps): JSX.Element => {
	const [usersToShow, setUsersToShow] = useState<UserProps[]>([]);

	useEffect(() => {
		(window.innerWidth <= 760)
			? setUsersToShow([...users].slice(0, 3))
			: setUsersToShow([...users]);
	}, [users]);

	useEffect(() => {
		const handleWindowResize = () => (window.innerWidth <= 770)
			? setUsersToShow([...users].slice(0, 3))
			: (users.length > usersToShow.length) ? setUsersToShow([...users]) : null;

		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, [users, usersToShow]);

	return (
		<div className='text-main-white w-screen h-full transition-all duration-300 md:h-2/3 max-h-[700px] my-auto mx-5 flex flex-wrap flex-col md:flex-row justify-center items-center gap-5 overflow-hidden'>
			{usersToShow.map((user, index) => 
				<User 
					key={index} 
					id={user.id}
					name={user.name}
					media={user.media}
					mic={user.mic}
					video={user.video}
					isLocal={user.isLocal}
				/>
			)}
		</div>
	);
};
