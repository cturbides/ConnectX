import React from 'react';
import Logo from '../components/Logo';
import Typewriter from 'typewriter-effect';

const Home = (): JSX.Element => {
	// const subtitles = ['experiences', 'ideas', 'toughts'];

	return (
		<div className='flex h-screen min-h-screen justify-center items-center flex-col'>
			<div className='w-7/12'>
				<Logo />
			</div>
			<div>
				<div className='text-center text-6xl mt-11  text-main-violet font-ranga '>
					<h1 className='text-main-black  text-center font-ramabhadra'>Build</h1>
					<Typewriter
						options={{
							autoStart: true,
							strings: ['experiences', 'ideas', 'toughts'],
							loop: true,
							deleteSpeed: 100
						}} 
					/>
				</div>
				<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
					<button className='
							cursor-pointer bg-main-black hover:bg-main-violet text-main-white 
							mt-5 p-2 w-64 rounded-xl
							ease-in-out duration-500
						'>
						Begin now
					</button>
				</div>
			</div>
			<footer className='font-ramabhadra text-[9px] text-center fixed bottom-1 '>
				<h2>Created by Carlos Turbides</h2>
			</footer>
		</div>
	);
};

export default Home;
