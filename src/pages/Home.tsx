import React from 'react';
import Logo from '../components/General/Logo';
import Footer from '../components/General/Footer';
import HeaderWrapper from '../components/Home/HeaderWrapper';

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
