import { LogoProps } from './Logo.props';
import main from '../../assets/connectx-logo-non-background.png';
import white from '../../assets/connectx-white-logo-non-background.png';
import React from 'react';

const BigLogo = ({ original }: LogoProps): JSX.Element => {
	return (
		<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
			<img src={(original) ? main : white} alt="ConnectX Logo" />
		</div>
	);
};

export default BigLogo;
