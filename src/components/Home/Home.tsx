import React from 'react';
import Logo from '../General/Logo';
import Footer from '..//General/Footer';
import HeaderWrapper from './HeaderWrapper';

const Home = (): JSX.Element => {
	return (
		<div className='h-screen min-h-screen flex items-center flex-col justify-center md:flex-row md:justify-start bg-main-white'>
			<Logo isBig={true} isOriginal={true} />
			<HeaderWrapper />
			<Footer />
		</div>
	);
};

export default Home;