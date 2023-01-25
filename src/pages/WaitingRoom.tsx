import React from 'react';
import Logo from '../components/General/Logo';
import Form from '../components/WaitingRoom/Form';
import Footer from '../components/General/Footer';

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
