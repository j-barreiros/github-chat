import React, { useState } from 'react'

// Style
import StyledMessageInput from './StyledMessageInput';

function MessageInput({ addMessage }) {

  const [newMessage, setNewMessage] = useState({sender: 'Jon', content: ''})

  function handleSubmit(event) {
    //Prevent page refesh
    event.preventDefault();
    setNewMessage({
      ...newMessage,
      id: Math.floor(Math.random() * 1000)
    })
    addMessage(newMessage);
    setNewMessage({sender:'Jon', content: ''})
  }

  return (
    <StyledMessageInput onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder='Enter your message'
        value={newMessage.content}
        onChange={(event) => setNewMessage({...newMessage, content: event.target.value})}
      />
      <button type="submit">Send</button>
    </StyledMessageInput>
  )
}

export default MessageInput