import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import InputMessage from './InputMessage';
import Message from './Message';
import React from 'react';

const Chat = (): JSX.Element => {
	return (
		<div className='h-screen w-1/2 hidden lg:block'>
			<div className='relative h-5/6 max-w-[350px] w-5/6 xl:w-full border-main-white border-[1px] rounded-[15px] mr-[43px] mt-[71px] ml-auto'>
				<div className='relative w-full'>
					<h1 className='text-main-white text-2xl font-ramabhadra ml-[28px] mt-[17px]'>Messages</h1>
					<div className='absolute top-0 right-0 mt-[6px] mr-[25px]'>
						<button>
							<FontAwesomeIcon icon={faXmark} className='text-main-white w-[25px] h-[25px]' />
						</button>
					</div>
				</div>
				
				<div id='messages' className='mt-[12px] h-[85%] w-full overflow-y-scroll'>
					<Message
						message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis, libero non sollicitudin porta, mauris nisi tristique velit, vitae consequat nunc eros pulvinar arcu. Maecenas euismod dolor sit amet est pharetra condimentum. Vivamus vitae arcu in dui posuere imperdiet. Nunc tempor sit amet nunc non hendrerit. Nam eu lacus risus. Nunc venenatis dolor libero, at semper mi semper sit amet. Proin finibus tincidunt ante, quis pretium est egestas porta. Mauris tempor sagittis est, et volutpat enim finibus et. Nam sit amet accumsan enim, ac consequat sapien.'
						user='canc34r'
					/>

					<Message
						message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis, libero non sollicitudin porta, mauris nisi tristique velit, vitae consequat nunc eros pulvinar arcu. Maecenas euismod dolor sit amet est pharetra condimentum. Vivamus vitae arcu in dui posuere imperdiet. Nunc tempor sit amet nunc non hendrerit. Nam eu lacus risus. Nunc venenatis dolor libero, at semper mi semper sit amet. Proin finibus tincidunt ante, quis pretium est egestas porta. Mauris tempor sagittis est, et volutpat enim finibus et. Nam sit amet accumsan enim, ac consequat sapien.'
						user='DANIEL34l'
					/>

					<Message
						message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis, libero non sollicitudin porta, mauris nisi tristique velit, vitae consequat nunc eros pulvinar arcu. Maecenas euismod dolor sit amet est pharetra condimentum. Vivamus vitae arcu in dui posuere imperdiet. Nunc tempor sit amet nunc non hendrerit. Nam eu lacus risus. Nunc venenatis dolor libero, at semper mi semper sit amet. Proin finibus tincidunt ante, quis pretium est egestas porta. Mauris tempor sagittis est, et volutpat enim finibus et. Nam sit amet accumsan enim, ac consequat sapien.'
						user='me'
					/>
				</div>

				<InputMessage />
			</div>
		</div>
	);
};

export default Chat;
