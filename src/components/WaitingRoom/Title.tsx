import { WaitingRoomStep } from '../../utils/types';
import React from 'react';

const Title = (props: {step: WaitingRoomStep}): JSX.Element => {
	return (props.step === 'username')
		? <h1><span>What&apos;s your</span> <span>name</span> <span>?</span></h1>
		: <h1><span>What&apos;s your</span> <span>RoomID</span> <span>?</span></h1>;
};

export default Title;
