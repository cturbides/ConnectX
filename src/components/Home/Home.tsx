import React from 'react';
import BigLogo from '../General/BigLogo';
import HeaderWrapper from './HeaderWrapper';

const Home = (): JSX.Element => {
	return (
		<div className='h-screen min-h-screen flex items-center flex-col justify-center md:flex-row md:mx-auto bg-main-white'>
			<BigLogo original={true} />
			<HeaderWrapper />
		</div>
	);
};

export default Home;