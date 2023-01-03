import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Button = (): JSX.Element => {
	return (
		<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
			<Link to='/waiting-room'>
				<button className='cursor-pointer bg-main-black hover:bg-main-violet text-main-white 
					mt-5 p-2 w-64 rounded-xl lg:w-96 ease-in-out duration-500'>
					Begin now
				</button>
			</Link>
			<Outlet />
		</div>
	);
};

export default Button;
