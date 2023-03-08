import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export type InformationProps = {
    roomID: string;
    users:  number;
	online: boolean;
};

export const Information = ({ roomID, users, online }: InformationProps): JSX.Element => {
	return (
		<div className='fixed w-fit flex mt-11 right-[38px] md:bottom-0 md:left-0 md:ml-10 md:mb-10'>
			<h4 className="text-main-white text-base justify-center items-center">
				<span className='font-ramabhadra mr-2'>{roomID}</span>&nbsp;
				<FontAwesomeIcon className={`w-1 ${(online) ? 'text-main-green' : 'text-main-red'}`} icon={faCircle} />&nbsp;
				<button className='font-ranga text-[18px] hover:text-main-violet active:text-main-violet ease-in-out duration-300'>
					<span className='font-ranga'>{users} people</span>
				</button>
			</h4>
		</div>
	);
};
