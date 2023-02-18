import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export type ButtonProps = {
    active: IconDefinition;
    unable: IconDefinition;
    activeColor: string;
    unableColor: string;
    isActive: boolean;
    procedure: () => void;
};

export const Button = ({
	active,
	unable,
	activeColor,
	unableColor,
	isActive,
	procedure
}: ButtonProps): JSX.Element => {
	const color = (isActive) ? activeColor : unableColor;

	return (
		<div>
			<button onClick={procedure} className={`text-xl mr-5 ml-5 hover:${activeColor} active:${activeColor} ${color} ease-in-out duration-300`}>
				<FontAwesomeIcon icon={(isActive) ? active : unable} />
			</button>
		</div>
	);
};