import React,  { MutableRefObject, useEffect, useRef } from 'react';
import { User } from '../../classes/User';

export type FrameProps = {
    user: User;
}

export const Frame = ({ user }: FrameProps): JSX.Element => {
	const micActiveStyle = (user.micState && !user.videoState) ? 'border-main-violet' : '';
	const videoActiveStyle = (user.videoState && user.micState) ? 'border-main-violet' : 'border-main-white';
	const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;

	useEffect(() => { videoRef.current.srcObject = user.media.data; }, [user.videoState]);

	return (
		<div className={`min-h-[170px] max-h-[290px] md:h-1/3 2xl:h-2/5 min-w-[250px] max-w-[400px] w-1/3 2xl:w-3/4
                      border-[1px] ${videoActiveStyle} hover:border-main-violet active:border-main-violet ease-in-out duration-300 border-solid rounded-lg`}
		>
			<div className='relative block h-full'>
				<div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] ${micActiveStyle}
								${(user.videoState) ? 'hidden' : ' '}
                                rounded-full border-main-white border-[1px] my-auto mx-auto text-center text-main-white font-ramabhadra text-6xl`}
				>
					<h4 className='mt-[16px]'>{user.name.charAt(0).toUpperCase()}</h4>
				</div>

				<div className={`${(!user.videoState) ? 'w-0' : 'w-full h-full'}`}>
					<video
						className='w-full h-full z-1'
						muted={(user.isLocal) ? true : false}
						ref={videoRef}
						autoPlay={true} />
				</div>

				<div className='absolute bottom-0 ml-5 mb-3 text-main-white font-ramabhadra text-base'>
					<p>{user.name}</p>
				</div>
			</div>
		</div>
	);
};
