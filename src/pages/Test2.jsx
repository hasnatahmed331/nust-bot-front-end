import API_BASE_URL from "@/config"

const Test = () => {

    async function getResponse() {
        try {
          const response = await fetch(`${API_BASE_URL}/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: "NustAdmin" , password: "nust1234" }),
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

      async function getResponse2() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
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

      async function getResponse3() {
        try {
          const response = await fetch(`${API_BASE_URL}/createChatbot/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ chatbotname: "project1" }),
            credentials: 'include'
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
            <h1>Test Page</h1>

            <button onClick={getResponse}>Login</button>
            <br></br>

            <button onClick={getResponse2} > AUTH HELLO </button>
            <br></br>
            
            <button onClick={getResponse3} > click </button>
            
        </div>
    );
};

export default Test;