import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = (): JSX.Element => {
	const typewriterOptions = {
		autoStart: true,
		strings: ['experiences', 'ideas', 'toughts'],
		loop: true,
		deleteSpeed: 100
	};

	return (
		<div className='text-center text-6xl mt-11  text-main-violet font-ranga md:text-7xl lg:text-8xl'>
			<h1 className='text-main-black  text-center font-ramabhadra lg:text-8xl'>Build</h1>
			<Typewriter options={typewriterOptions} />
		</div>
	);
};

export default Header;
