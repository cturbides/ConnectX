import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Message } from '../../../helpers/MessageHandlers';
import React, { useRef, useEffect } from 'react';
import { MessageInput } from './MessageInput';
import { MessageTile } from './MessageTile';

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
	const messagesRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => { (chatState) ? messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight) : ''; }, [messages, chatState]);

	return (
		<div className={`h-screen transition-all duration-300 ${(!chatState) ? 'w-0' : 'w-1/2'}`}>
			<div className='w-full h-full pr-[43px] flex items-center justify-end'>
				<div className={`relative h-5/6 min-h-[200px] max-w-[350px] w-5/6 xl:w-full border-main-white border-[1px] rounded-[15px] transition-all duration-300 ${(chatState) ? 'translate-x-0' : 'translate-x-[100vw]'}`}>

					<div className='flex flex-col h-full'>

						<div className='w-full pt-[15px] px-6 flex justify-between content-center'>
							<h1 className='text-main-white text-2xl font-ramabhadra'>Messages</h1>
							<button onClick={() => setChatState(!chatState)} className='mt-2'>
								<FontAwesomeIcon icon={faXmark} className='text-main-white w-[25px] h-[25px] ease-in-out duration-300 hover:text-main-violet focus:text-main-violet' />
							</button>
						</div>

						<div className='w-full px-10 pt-6 pb-[60px] flex-1 overflow-hidden' id="Messages">
							<div className="h-full overflow-y-auto no-scrollbar" ref={messagesRef}>
								{messages.map((message, index) => <MessageTile username={(message.username === username) ? 'Me' : message.username} content={message.content} key={index} />)}
							</div>
						</div>

					</div>

					<MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
				</div>
			</div>
		</div>
	);
};

export default Chat;
