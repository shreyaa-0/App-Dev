// src/Chatbot.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional: Create a CSS file for styling

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSend = async () => {
        if (input.trim() === '') return;

        // Add user message
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
        setLoading(true);

        try {
            // Replace `YOUR_API_KEY` with your actual Gemini API key
            const response = await axios.post('https://api.gemini.com/v1/gemini_endpoint', {
                message: input
            }, {
                headers: {
                    'Authorization': `Bearer YOUR_API_KEY`
                }
            });

            const botResponse = response.data; // Adjust based on actual API response format

            // Add bot response
            setMessages([...messages, { text: input, sender: 'user' }, { text: botResponse.message, sender: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages([...messages, { text: input, sender: 'user' }, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chatbot">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                {loading && <div className="message bot">...</div>}
            </div>
            <div className="input">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
