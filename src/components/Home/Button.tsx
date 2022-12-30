import React from 'react';

const Button = (): JSX.Element => {
	return (
		<div className='text-center ml-auto mr-auto mb-11 font-ramabhadra text-lg'>
			<button className='cursor-pointer bg-main-black hover:bg-main-violet text-main-white 
				mt-5 p-2 w-64 rounded-xl lg:w-96 ease-in-out duration-500'>
                Begin now
			</button>
		</div>
	);
};

export default Button;
