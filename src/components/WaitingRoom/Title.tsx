import { WaitingRoomStep } from '../../utils/types';
import React from 'react';

const Title = (props: {step: WaitingRoomStep}): JSX.Element => {
	const normalStyle 	= 'text-main-black  font-ramabhadra';
	const curlyStyle 	= 'text-main-violet font-ranga md:text-7xl lg:text-8xl';
	const titleStyle 	= 'mb-10 text-center text-6xl lg:text-8xl';

	const usernameElement: JSX.Element = (
		<h1 className={titleStyle}>
				<span className={normalStyle}>What&apos;s your</span> <span className={curlyStyle}>name</span><span className={normalStyle + ' ml-1'}>?</span>
		</h1>
	);

	const roomElement: JSX.Element = (
		<h1 className={titleStyle}>
				<span className={normalStyle}>What&apos;s your</span> <span className={curlyStyle}>RoomID</span><span className={normalStyle + ' ml-1'}>?</span>
		</h1>
	);

	return (props.step === 'username')
		? usernameElement
		: roomElement;
};

export default Title;
