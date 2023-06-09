import main from '../../assets/connectx-logo-non-background.png';
import white from '../../assets/connectx-white-logo-non-background.png';
import React from 'react';

const BigLogo = (props: { original: boolean }): JSX.Element => {
	return (
		<div className='w-3/12 md:w-4/12 max-w-lg min-w-[200px]'>
			<img src={(props.original) ? main : white} alt="ConnectX Logo" />
		</div>
	);
};

export default BigLogo;