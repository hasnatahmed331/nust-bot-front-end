import "./chatinput.css";
import PropTypes from 'prop-types';


function ChatInput({setInput , onSend , input}) {
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };

    return (
      <div className="chatinput">
        <textarea placeholder="Enter Your Query Here ?" 
            onChange={handleChange}  
            value={input}
        ></textarea>
        <button onClick={onSend} >Send</button>
      </div>
    )
}

ChatInput.propTypes = {
    setInput: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    onSend: PropTypes.func.isRequired
}
  
export default ChatInput
  