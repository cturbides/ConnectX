import React from 'react';
import Logo from '../components/General/Logo';
import Footer from '../components/General/Footer';

const WaitingRoom = (): JSX.Element => {
	return (
		<div>
			<div>
				<Logo />
			</div>
			
			<div>
				<h1>
					<span>What&apos;s your</span> <span>name</span> <span>?</span>
				</h1>
				<form>
					<input type="text" name="user-name" id="username" />
					<button type="submit">Continue</button>
				</form>
			</div>

			<Footer />
		</div>
	);
};

export default WaitingRoom;
