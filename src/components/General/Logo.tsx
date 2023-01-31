import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.props';
import originalLogo from '../../assets/connectx-logo-non-background.png';
import React from 'react';

const Logo = ({ isBig, isOriginal}: LogoProps): JSX.Element => {
	const bigOriginalLogo: JSX.Element = (
		<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
			<img src={originalLogo} alt="ConnectX Logo" />
		</div>
	);

	const smallOriginalLogo: JSX.Element = (
		<Link to='/'>
			<div className='fixed w-[70px] ml-5 mt-5 md:w-20 md:ml-10 md:mt-5'>
				<img src={originalLogo} alt="ConnectX Logo" />
			</div>
		</Link>
	);

	const smallWhiteLogo: JSX.Element = (
		<Link to='/'>
			<div className='fixed w-[70px] ml-5 mt-5 md:w-20 md:ml-10 md:mt-5'>
				<img src={originalLogo} alt="ConnectX Logo" />
			</div>
		</Link>
	);

	return  (isBig) ? bigOriginalLogo :
		(isOriginal) ? smallOriginalLogo : smallWhiteLogo;
};

export default Logo;

