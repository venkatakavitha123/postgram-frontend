import { useState } from 'react';
import './chatbox.css';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, sender: 'me' }]);
    setInput('');
  };
  
  return(
    <div  className="chat-container">
        <h2>Chat</h2>
        <div className="chat-box">
            {messages.map((msg,index) => (
                <div
                key={index}
                className={`chat-message ${msg.sender === 'me' ? 'sent' : 'received'}`}
                > 
                {msg.text}

                </div>
            ))}

        </div>
        <div className="chat-input">
            <input
            type = "text"
            placeholder="Type a message...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>

        </div>
    </div>

  );


}

export default Chatbox;