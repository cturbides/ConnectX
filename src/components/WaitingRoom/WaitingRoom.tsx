import Form from './Form';
import React from 'react';
import Footer from '../General/Footer';
import SmallLogo from '../General/SmallLogo';

const WaitingRoom = (): JSX.Element => {
	return (
		<div className='min-h-screen w-screen bg-main-white'>
			<SmallLogo original={true} />
			<Form />
			<Footer />
		</div>
	);
};

export default WaitingRoom;
