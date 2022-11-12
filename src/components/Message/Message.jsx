import React from 'react'

function Message({message}) {
  return (
    <div>
        <p>{`${message.content}`}</p>
    </div>
  )
}

export default Message