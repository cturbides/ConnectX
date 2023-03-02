import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MessageInput } from './MessageInput';
import { MessageTile } from './MessageTile';
import { Message } from '../../../helpers/MessageHandlers';
import React from 'react';

interface ChatProps {
	username: string;
	messages: Message[];
	message: Message;
	chatState: boolean;
	setMessage: React.Dispatch<React.SetStateAction<Message>>;
	setChatState: React.Dispatch<React.SetStateAction<boolean>>;
	sendMessage: () => Promise<void>;
}

const Chat = ({ username, messages, message, chatState, setMessage, setChatState, sendMessage }: ChatProps): JSX.Element => {
	return (
		<div className={`h-screen transition-all duration-300 ${(!chatState) ? 'w-0' : 'w-1/2'}`}>
			<div className={`relative h-5/6 min-h-[370px] max-w-[350px] w-5/6 xl:w-full border-main-white border-[1px] rounded-[15px] mr-[43px] mt-[71px] ml-auto transition-all duration-300 ${(chatState) ? 'translate-x-0' : 'translate-x-[100vw]'}`}>

				<div className='relative w-full'>
					<h1 className='text-main-white text-2xl font-ramabhadra ml-[28px] mt-[17px]'>Messages</h1>
					<div className='absolute top-0 right-0 mt-[6px] mr-[25px]'>
						<button onClick={() => setChatState(!chatState)}>
							<FontAwesomeIcon icon={faXmark} className='text-main-white w-[25px] h-[25px] ease-in-out duration-300 hover:text-main-violet focus:text-main-violet' />
						</button>
					</div>
				</div>

				<div className='absolute flex items-center justify-center h-full'>
					<div id='messages' className='h-3/4 max-h-[760px] w-full overflow-y-scroll'>
						{messages.map((message, index) => <MessageTile username={(message.username === username) ? 'Me' : message.username} content={message.content} key={index} />)}
					</div>
				</div>

				<MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
		</div>
	);
};

export default Chat;
