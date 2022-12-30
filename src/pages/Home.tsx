import React from 'react';
import Logo from '../components/Logo';
import Typewriter from 'typewriter-effect';

const Home = (): JSX.Element => {
	const typewriterOptions = {
		autoStart: true,
		strings: ['experiences', 'ideas', 'toughts'],
		loop: true,
		deleteSpeed: 100
	};
	
	return (
		<div className='flex h-screen min-h-screen items-center 
			flex-col justify-center
			md:flex-row md:justify-start'>

			<div className='w-7/12 md:w-5/12 md:ml-[10%]'>
				<Logo />
			</div>

			<div className='md:ml-[10%]'>
				<div className='text-center text-6xl mt-11  text-main-violet font-ranga 
					md:text-7xl
					lg:text-8xl'>

					<h1 className='text-main-black  text-center font-ramabhadra lg:text-8xl'>Build</h1>
					<Typewriter options={typewriterOptions} />
				</div>
				<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
					<button className='
							cursor-pointer bg-main-black hover:bg-main-violet text-main-white 
							mt-5 p-2 w-64 rounded-xl
							lg:w-96
							ease-in-out duration-500
						'>
						Begin now
					</button>
				</div>
			</div>
			<footer className='font-ramabhadra text-[9px] text-center fixed bottom-1 lg:text-center lg:text-[10px] w-screen'>
				<h2>Created by Carlos Turbides</h2>
			</footer>
		</div>
	);
};

export default Home;
