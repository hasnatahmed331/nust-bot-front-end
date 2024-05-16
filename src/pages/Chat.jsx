import ChatBox from "@/components/chatbox/ChatBox"
import API_BASE_URL from "@/config"


import { useState } from "react"

function Chat() {

    const [input , setInput] = useState("")
    const [messages , setMessages] = useState([])

    const sendMessage = () => {
        setMessages([...messages , {text: input , user: true}]);
        getResponse(input)
        .then((response) => {
          setMessages((prevMessages) => [...prevMessages, { text: response, user: false }]);
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
        setInput("");
    }

    async function getResponse(query) {
      try {
        const response = await fetch(`${API_BASE_URL}/chat/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query }),
        
        });
        
        
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
    
        const data = await response.json();
        console.log(data);
        return data.response;
      } catch (error) {
        console.error('Error sending message:', error);
        throw error; 
      }
    }
    

    return (
      <div>
        <ChatBox 
            setInput={setInput}
            messages={messages}
            input={input}
            onSend={sendMessage}
         ></ChatBox>
      </div>
    )
  }
  
  export default Chat
  