import React from 'react';
import Logo from '../General/Logo';
import Form from './Form';
import Footer from '../General/Footer';

const WaitingRoom = (): JSX.Element => {
	return (
		<div className='min-h-screen w-screen bg-main-white'>
			<Logo isBig={false} isOriginal={true} />
			<Form />
			<Footer />
		</div>
	);
};

export default WaitingRoom;
