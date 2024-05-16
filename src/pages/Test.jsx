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

      async function getResponse7() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
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

      function getCookie(name) {
        console.log("Getting cookie");
        console.log(document.cookie);
        
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    }
    
    

    async function getresponse3() {
        console.log("Calling" , getCookie('csrftoken'));
        try {
            const response = await fetch(`${API_BASE_URL}/hello/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
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

    async function getresponse4() {
        try {
            const response = await fetch(`${API_BASE_URL}/helloo/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
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

    async function getresponse5() {
        try {
            const response = await fetch(`${API_BASE_URL}/hell/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: "Nusdmin" }),

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

    async function getresponse6() {
        try {
            const response = await fetch(`${API_BASE_URL}/hell/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: "Nusdmin" }),
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

            <button onClick={getResponse}>   Login</button>
            <br></br>

            <button onClick={getResponse2} > Hello Get AUTH_REQ - INCLUDE</button>
            <br></br>

            <button onClick={getResponse7} > Hello Get AUTH_REQ </button>
            <br></br>

            <button onClick={getresponse6} > Simple POST with INCLUDE </button>
            <br></br>

            <button onClick={getresponse3} > Gettting cookie as header </button>
            <br></br>

            <button onClick={getresponse4} > Simple GET </button>
            <br></br>

            <button onClick={getresponse5} > Simple POST </button>
            <br></br>

            
        </div>
    );
};

export default Test;