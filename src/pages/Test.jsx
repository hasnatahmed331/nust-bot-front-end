import API_BASE_URL from "@/config"
import { useState } from "react"

const Test = () => {

    const [csrfToken, setCsrfToken] = useState('');


    async function getResponse() {
        try {
          const response = await fetch(`${API_BASE_URL}/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: "areeb" , password: "areeb1234" }),
          });
          
          if (!response.ok) {
            throw new Error('Failed to send message');
          }
      
          const data = await response.json();
          console.log(data);

          setCsrfToken(data.csrf_token);

          return data.response;
        } catch (error) {
          console.error('Error sending message:', error);
          throw error; 
        }
      }

      async function getResponse1() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
          });

          console.log("CSRF Token: ", csrfToken);
          
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
          const response = await fetch(`${API_BASE_URL}/hello1/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
          });

          console.log("CSRF Token: ", csrfToken);
          
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
          const response = await fetch(`${API_BASE_URL}/hello/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            credentials : "include"
          });

          console.log("CSRF Token: ", csrfToken);
          
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

      async function getResponse4() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello1/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            credentials : "include"
          });

          console.log("CSRF Token: ", csrfToken);
          
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

      async function getResponse5() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello2/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log("CSRF Token: ", csrfToken);
          
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

      async function getResponse6() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello3/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log("CSRF Token: ", csrfToken);
          
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
          const response = await fetch(`${API_BASE_URL}/hello2/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            credentials : "include"
          });

          console.log("CSRF Token: ", csrfToken);
          
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

      async function getResponse8() {
        try {
          const response = await fetch(`${API_BASE_URL}/hello3/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            credentials : "include"
          });

          console.log("CSRF Token: ", csrfToken);
          
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

            <button onClick={getResponse1} > Hello Get AUTH_REQ - no Credentials - csrf</button>
            <br></br>

            <button onClick={getResponse2} > Hello Post AUTH_REQ - no credentials - csrf </button>
            <br></br>

            <button onClick={getResponse3} > Hello Get AUTH_REQ - Credentials included - csrf</button>
            <br></br>

            <button onClick={getResponse4} > Hello Post AUTH_REQ - Credentials included - csrf</button>
            <br></br>


            <button onClick={getResponse5} > Simple POST  - no csrf - no cred</button>
            <br></br>

            <button onClick={getResponse6} > Simple GET  - no csrf - no cred</button>
            <br></br>

            <button onClick={getResponse7} > Simple POST - credentials included</button>
            <br></br>

            <button onClick={getResponse8} > Simple Get - credentials included</button>
            <br></br>

            
        </div>
    );
};

export default Test;