import React, { useContext, useState } from 'react'
import { AuthContext } from '../../service/AuthContext';

// Style
import StyledMessageInput from './StyledMessageInput';

function SendArrowSvg() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  )
}

function MessageInput({ addMessage, user}) {

  const authcontext = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState({ sender: user,content: ''})

  function handleSubmit(event) {
    //Prevent page refesh
    event.preventDefault();
    addMessage(newMessage);
    setNewMessage({ ...newMessage, content: ''})
  }
  
  return (
    <StyledMessageInput onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder='Enter your message'
        value={newMessage.content}
        onChange={(event) => setNewMessage({ ...newMessage, content: event.target.value })}
      />
      <button type="submit">
        <SendArrowSvg />
      </button>
      
    </StyledMessageInput>
  )
}

export default MessageInput