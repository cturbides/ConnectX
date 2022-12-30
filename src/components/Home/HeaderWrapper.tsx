import React from 'react';
import Header from './Header';
import Button from './Button';

const HeaderWrapper = (): JSX.Element => {
	return (
		<div className='md:ml-[10%]'>
			<Header />
			<Button />
		</div>
	);
};

export default HeaderWrapper;
