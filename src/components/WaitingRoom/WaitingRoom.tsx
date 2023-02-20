import Form from './Form';
import React from 'react';
import Footer from '../General/Footer';
import SmallLogo from '../General/SmallLogo';
import { useNavigate } from 'react-router';

export type WaitingRoomStep = 'username' | 'roomID';

const WaitingRoom = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<div className='min-h-screen w-screen bg-main-white'>
			<SmallLogo
				original={true}
				applyToggle={false}
				exit={() => navigate('/')}
			/>

			<Form />
			<Footer />
		</div>
	);
};

export default WaitingRoom;