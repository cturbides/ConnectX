import { UsersFrameProps } from './UsersFrame.props';
import Frame from './Frame';
import React from 'react';

const UsersFrame = ({ users }: UsersFrameProps): JSX.Element => {
	return (
		<div className='text-main-white w-screen flex flex-wrap justify-center items-center'>
			{users.map((user, index) => {
				return <Frame user={user} key={index} />;
			})}
		</div>
	);
};

export default UsersFrame;
