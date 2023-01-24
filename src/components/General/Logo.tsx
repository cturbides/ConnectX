import { LogoProps } from '../../utils/types';
import originalLogo from '../../assets/connectx-logo-non-background.png';
import React from 'react';

const Logo = (props: LogoProps): JSX.Element => {
	const isBig 	= props.isBig;
	const original 	= props.isOriginal;

	const bigOriginalLogo: JSX.Element = (
		<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
			<img src={originalLogo} alt="ConnectX Logo" />
		</div>
	);

	const smallOriginalLogo: JSX.Element = (
		<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
			<img src={originalLogo} alt="ConnectX Logo" />
		</div>
	);

	const smallWhiteLogo: JSX.Element = (
		<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
			<img src={originalLogo} alt="ConnectX Logo" />
		</div>
	);

	return  (isBig) 	? bigOriginalLogo   :
		(original)  ? smallOriginalLogo : smallWhiteLogo;
};

export default Logo;

