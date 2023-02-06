import { Link } from 'react-router-dom';
import white from '../../assets/connectx-white-logo-non-background.png';
import main from '../../assets/connectx-logo-non-background.png';
import React from 'react';

const SmallLogo = (props: { original: boolean }): JSX.Element => {
	return (
		<Link to='/'>
			<div className='fixed w-[70px] ml-5 mt-5 md:w-20 md:ml-10 md:mt-5'>
				<img src={(props.original) ? main : white} alt="ConnectX Logo" />
			</div>
		</Link>
	);
};

export default SmallLogo;
