import React from 'react'

// Style
import StyledMessage from './StyledMessage'

function Message({ message }) {
  return (
    <StyledMessage className={message.id % 2 == 0 ? 'sentMessage' : 'receivedMessage'}>
      <img src='https://avatars.githubusercontent.com/u/51035089?v=4' />
      <div>
        <p>{`${message.content}`}</p>
      </div>
    </StyledMessage>
  )
}

export default Message