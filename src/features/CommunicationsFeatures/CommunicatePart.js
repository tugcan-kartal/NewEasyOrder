import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppImage from "../../static/whatsapp.png";
import CommentImage from "../../static/comment.png";

const CommunicatePart = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setShowChat(true);
  };

  const handleCloseButtonClick = () => {
    setShowChat(false);
    setMessages([]);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userMessage = {
      text: inputValue,
      sender: 'user',
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Burada yapay zeka servisine ileti gönderebilir ve cevap alabilirsiniz
    // Örnek olarak, burada basit bir bot yanıtı gönderiyorum
    const botResponse = {
      text: 'Bot response to: ' + inputValue,
      sender: 'bot',
    };
    setMessages([...messages, botResponse]);
  };

  return (
    <div>

        <div className="fixed md:w-[5vw] w-[15vw] md:bottom-[6vh] bottom-[12vh] md:right-[3vw] right-[2vw] hover:opacity-80">
            <Link to="https://wa.me/08508852634">
                <img className='md:w-[5vw] w-[20vw]' src={WhatsAppImage} alt='' />
            </Link>
        </div>


        {showChat ? (
          <div className="fixed bottom-4 left-4 hover:opacity-80">
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', width: '300px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3>Chat</h3>
                <button onClick={handleCloseButtonClick}>Close</button>
              </div>
              <div style={{ height: '300px', overflowY: 'scroll' }}>
                {messages.map((message, index) => (
                  <div key={index}>
                    {message.sender === 'user' ? (
                      <p style={{ textAlign: 'right' }}>{message.text}</p>
                    ) : (
                      <p style={{ textAlign: 'left' }}>{message.text}</p>
                    )}
                  </div>
                ))}
              </div>
              <form onSubmit={handleFormSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="fixed md:w-[5vw] w-[15vw] md:bottom-[6vh] bottom-[12vh] md:left-[3vw] left-[2vw] hover:opacity-80">
            <Link to="#" onClick={handleButtonClick}>
              <img className='' src={""} alt='' />
            </Link>
          </div>
        )}
    </div>
  );
}

export default CommunicatePart;
