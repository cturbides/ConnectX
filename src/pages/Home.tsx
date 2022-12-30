import React from 'react';
import Logo from '../components/Home/Logo';
import HeaderWrapper from '../components/Home/HeaderWrapper';
import Footer from '../components/Home/Footer';

const Home = (): JSX.Element => {
	return (
		<div className='flex h-screen min-h-screen items-center flex-col justify-center md:flex-row md:justify-start'>
			<Logo />
			<HeaderWrapper />
			<Footer />
		</div>
	);
};

export default Home;
