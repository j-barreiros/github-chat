import React, { useState } from 'react'

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
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder='Enter your message'
        value={newMessage.content}
        onChange={(event) => setNewMessage({...newMessage, content: event.target.value})}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageInput