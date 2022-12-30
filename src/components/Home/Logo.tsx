import React from 'react';
import logo from '../../assets/connectx-logo-non-background.png';

const Logo = (): JSX.Element => {
	return (
		<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
			<img src={logo} alt="ConnectX Logo" />
		</div>
	);
};

export default Logo;

