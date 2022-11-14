import React, { useContext } from 'react'
import { AuthContext } from '../../service/AuthContext'

// Style
import StyledMessage from './StyledMessage'

function Message({ message }) {
  const authcontext = useContext(AuthContext);
  return (
    <StyledMessage className={authcontext.user.user_name === message.sender ? 'sentMessage' : 'receivedMessage'}>
      <img src={`https://github.com/${message.sender}.png`} />
      <div>
        <p>{`${message.content}`}</p>
      </div>
    </StyledMessage>
  )
}

export default Message