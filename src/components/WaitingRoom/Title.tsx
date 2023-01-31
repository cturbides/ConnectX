import { WaitingRoomStep } from './WaitingRoom.props';
import React from 'react';

const Title = (props: { step: WaitingRoomStep }): JSX.Element => {
	const normalStyle 	= 'text-main-black  font-ramabhadra';
	const curlyStyle 	= 'text-main-violet font-ranga md:text-7xl lg:text-8xl';
	const titleStyle 	= 'mb-8 text-center text-6xl lg:text-8xl';
	const step 			= props.step;

	return (
		<h1 className={titleStyle}>
			<span className={normalStyle}>What&apos;s your</span> 
			<span className={curlyStyle}>{(step == 'username') ? ' username' : ' RoomID'}</span>
			<span className={normalStyle + ' ml-1'}>?</span>
		</h1>
	);	
};

export default Title;
