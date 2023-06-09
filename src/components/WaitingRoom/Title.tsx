import { WaitingRoomStep } from './WaitingRoom';
import React from 'react';

const Title = (props: { step: WaitingRoomStep }): JSX.Element => {
	const normalStyle 	= 'text-main-black  font-ramabhadra';
	const curlyStyle 	= 'text-main-violet font-ranga text-6xl xl:text-7xl';
	const titleStyle 	= 'mb-8 text-center text-6xl lg:text-7xl xl:text-7xl';
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
