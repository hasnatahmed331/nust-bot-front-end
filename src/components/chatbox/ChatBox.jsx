import Message from "@/components/message/Message"
import ChatInput from "@/components/chatinput/ChatInput"
import Title from "../Title/Title";

import PropTypes from 'prop-types';
 
import "./ChatBox.css"

function ChatBox({messages , setInput  , input, onSend}) {

    return (
    <>
    <Title title="National University of Sciecne and Tecnhology - QA Support" />
      <div className="chatbox">
        <div className="messagearea">
            {messages.map((message , index) => (
                <Message key={index} text={message.text} user={message.user} />
            ))}
        </div>
        
        <div className="inputarea">
            <ChatInput 
                setInput={setInput} 
                onSend={onSend}
                input={input}  
                />
        </div>
      </div>
    </>
    )
}

ChatBox.propTypes = {
    messages: PropTypes.array.isRequired,
    input: PropTypes.string.isRequired,
    onSend: PropTypes.func.isRequired,
    setInput: PropTypes.func.isRequired
};

export default ChatBox
  