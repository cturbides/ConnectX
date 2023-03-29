import React, { MutableRefObject, useRef, useEffect } from 'react';

export type UserProps = {
	id: string;
	name: string;
	media: MediaStream;
	mic: boolean;
	video: boolean;
	isLocal: boolean | false;
};

export const User = ({ 
	name, 
	media, 
	mic, 
	video, 
	isLocal 
}: UserProps): JSX.Element => {
	const videoSrc = useRef() as MutableRefObject<HTMLVideoElement>;
	const isVideoActive = (video && media && media.getVideoTracks().find(track => track.enabled));

	useEffect(() => { videoSrc.current.srcObject = media; }, [media, video]);

	return (
		<div className={`min-h-[170px] max-h-[290px] md:h-1/3 2xl:h-2/5 min-w-[250px] max-w-[400px] w-1/3 2xl:w-3/4 border-[1px] ${(video && mic) ? 'border-main-violet' : 'border-main-white'} hover:border-main-violet active:border-main-violet ease-in-out duration-300 border-solid rounded-lg`}>
			<div className='relative block h-full'>
				<div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] ${(mic && !video) ? 'border-main-violet' : ''} ${(isVideoActive) ? 'hidden' : ' '} rounded-full border-main-white border-[1px] my-auto mx-auto text-center text-main-white font-ramabhadra text-6xl`}>
					<h4 className='mt-[16px]'>{name.charAt(0).toUpperCase()}</h4>
				</div>

				<div className={`${(!isVideoActive) ? 'w-0' : 'w-full h-full'}`}>
					<video
						className='w-full h-full z-1 object-cover rounded-lg'
						autoPlay={true}
						ref={videoSrc}
						controls={false}
						muted={isLocal}
					/>
				</div>

				<div className='absolute bottom-0 ml-5 mb-3 text-main-white font-ramabhadra text-base'>
					<p>{name}</p>
				</div>
			</div>
		</div>
	);
};
