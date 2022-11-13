import React, { useEffect, useRef, useState } from 'react'

//Components
import Message from '../Message/Message';

// Style
import StyledMessageBoard from './StyledMessageBoard';


function MessageBoard({ messages }) {

    const board = useRef();

    // Scroll the message board down when a new message is added 
    useEffect(() => {
        board.current.scrollTop = board.current.scrollHeight;
    }, [messages])

    return (
        <StyledMessageBoard ref={board}>
            {messages.map(message =>
                <Message
                    key={message.id}
                    message={message}
                />
            )}
        </StyledMessageBoard>
    )
}

export default MessageBoard