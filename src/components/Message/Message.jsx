import React, { useContext } from 'react'
import { AuthContext } from '../../service/AuthContext'

// Style
import StyledMessage from './StyledMessage'

function SentMessage() {
  return
}

function Message({ message, received, chainedMessage }) {
  const authcontext = useContext(AuthContext);
  return (
    <StyledMessage className={`
      ${received && 'receivedMessage'} 
      ${chainedMessage && 'chainedMessage'}`
    }>
      <a href={`https://github.com/${message.sender}`} target='about_blank'>
        <img src={`https://github.com/${message.sender}.png`} />
      </a>
      <div>
        <h4 className='sender-name'>{`${message.sender}`}</h4>
        <p className='message-content'>{`${message.content}`}</p>
        <p className='message-sendtime'>{message.created_at.slice(11,16)}</p>
      </div>
    </StyledMessage>
  )
}

export default Message