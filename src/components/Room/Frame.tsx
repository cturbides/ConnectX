import { FrameProps } from './Frame.props';
import React from 'react';

const Frame = ({ user }: FrameProps): JSX.Element => {
	return (
		<div className='min-h-[50px] min-w-[250px] max-h-[230px] max-w-[400px] h-1/4 w-1/3 
                      text-main-white border-[1px] border-main-white hover:border-main-violet active:border-main-violet border-solid rounded-lg'
		>
			<div className='relative block h-full'>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px]
                                rounded-full border-main-white border-[1px] my-auto mx-auto text-center text-main-white font-ramabhadra text-6xl'
				>
					<h4 className='mt-[16px]'>{user.charAt(0)}</h4>
				</div>
				<div className='absolute bottom-0 ml-5 mb-3 text-main-white font-ramabhadra text-base'>
					<p>{user}</p>
				</div>
			</div>
		</div>
	);
};

export default Frame;
