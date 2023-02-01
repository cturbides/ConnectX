import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.props';
import main from '../../assets/connectx-logo-non-background.png';
import white from '../../assets/connectx-white-logo-non-background.png';
import React from 'react';

const SmallLogo = ({ original }: LogoProps): JSX.Element => {
	return (
		<Link to='/'>
			<div className='fixed w-[70px] ml-5 mt-5 md:w-20 md:ml-10 md:mt-5'>
				<img src={(original) ? main : white} alt="ConnectX Logo" />
			</div>
		</Link>
	);
};

export default SmallLogo;
