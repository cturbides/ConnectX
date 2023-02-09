import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import InputMessage from './InputMessage';
import Message from './Message';
import React from 'react';

interface Props {
	messages: string[];
	message: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Chat = ({ messages, message, setMessage }: Props): JSX.Element => {
	return (
		<div className='h-screen w-1/2 hidden lg:block'>
			<div className='relative h-5/6 max-w-[350px] w-5/6 xl:w-full border-main-white border-[1px] rounded-[15px] mr-[43px] mt-[71px] ml-auto'>

				<div className='relative w-full'>
					<h1 className='text-main-white text-2xl font-ramabhadra ml-[28px] mt-[17px]'>Messages</h1>
					<div className='absolute top-0 right-0 mt-[6px] mr-[25px]'>
						<button>
							<FontAwesomeIcon icon={faXmark} className='text-main-white w-[25px] h-[25px] ease-in-out duration-300 hover:text-main-violet focus:text-main-violet' />
						</button>
					</div>
				</div>
				
				<div id='messages' className='mt-[12px] h-[85%] w-full overflow-y-scroll'>
					{messages.map((message, index) => <Message content={message} user='change-user' key={index} />)}
				</div>

				<InputMessage message={message} setMessage={setMessage} />
			</div>
		</div>
	);
};

export default Chat;