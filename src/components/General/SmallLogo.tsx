import white from '../../assets/connectx-white-logo-non-background.png';
import main from '../../assets/connectx-logo-non-background.png';
import React, { useState } from 'react';

interface Props {
	original: boolean;
	applyToggle: boolean;
	exit: () => void;
}

const SmallLogo = ({ original, applyToggle, exit }: Props): JSX.Element => {
	const [showOriginal, setShowOriginal] = useState(original);
	const toggle = () => (applyToggle) ? setShowOriginal(prev => !prev) : 0;

	return (
		<div
			className='fixed w-[70px] ml-5 mt-5 md:w-20 md:ml-10 md:mt-5 transition duration-300 easy-in-out focus:cursor-pointer hover:cursor-pointer'
			onMouseOver={toggle}
			onMouseOut={toggle}
			onClick={() => exit()}
		>
			<div className='relative'>
				<img className={`absolute top-0 transition easy-in-out duration-300 ${(showOriginal) ? 'opacity-100' : 'opacity-0'}`} src={main} alt="ConnectX Logo" />
				<img className={`absolute top-0 transition easy-in-out duration-300 ${(showOriginal) ? 'opacity-0' : 'opacity-100'}`} src={white} alt="ConnectX Logo" />
			</div>
		</div>
	);
};

export default SmallLogo;
