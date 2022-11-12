import React, { useState } from 'react'

//Components
import Message from '../Message/Message';

// Style
import StyledMessageBoard from './StyledMessageBoard';

function MessageBoard({messages}) {

    return (
        <StyledMessageBoard>
            {messages.map(message => <Message key={message.id} message={message} />)}
        </StyledMessageBoard>
    )
}

export default MessageBoard