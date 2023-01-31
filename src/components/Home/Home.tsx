import React from 'react';
import BigLogo from '../General/BigLogo';
import Footer from '..//General/Footer';
import HeaderWrapper from './HeaderWrapper';

const Home = (): JSX.Element => {
	return (
		<div className='h-screen min-h-screen flex items-center flex-col justify-center md:flex-row md:justify-start bg-main-white'>
			<BigLogo original={true} />
			<HeaderWrapper />
			<Footer />
		</div>
	);
};

export default Home;