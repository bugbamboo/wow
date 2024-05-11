import React, { useState } from 'react';
import ReactDOM from 'react-dom';
export default PuzzleA;
function PuzzleA() {
    const [userInput, setUserInput] = useState('');
    const [responses, setResponses] = useState([]);

    function sendMessage() {
        if (!userInput.trim()) return; // Prevent sending empty messages
        
        fetch('http://localhost:5000/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            setResponses(responses => [...responses, { query: userInput, response: data.message }]);
            setUserInput(''); // Clear input box after sending
        })
        .catch(error => console.error('Error:', error));
    }
    

    return (
        <div className="chat-container">
            <div id="response-area">
                <strong>GPT:</strong> <div className="message">Large Language models tell truths and lies. To find the password, test statements and decide.</div>
                {responses.map((item, index) => (
                    <div key={index} className="message-group">
                        <strong>You:</strong> <div className="message">{item.query}</div>
                        <strong>GPT:</strong> <div className="message">{item.response}</div>
                    </div>
                ))}
            </div>
            <textarea
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

// Render the ChatInterface component to the DOM
ReactDOM.render(<PuzzleA />, document.getElementById('root'));
