import React, { useContext, useState } from 'react'
import { AuthContext } from '../../service/AuthContext';

// Style
import StyledMessageInput from './StyledMessageInput';

function MessageInput({ addMessage }) {

  const authcontext = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState({sender: authcontext.user.user_name, content: ''})

  function handleSubmit(event) {
    //Prevent page refesh
    event.preventDefault();
    addMessage(newMessage);
    setNewMessage({...newMessage, content: ''})
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