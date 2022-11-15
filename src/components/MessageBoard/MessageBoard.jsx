import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../service/AuthContext';

//Components
import Message from '../Message/Message';

// Style
import StyledMessageBoard from './StyledMessageBoard';

function MessageBoard({ messages, room }) {
    const authcontext = useContext(AuthContext)
    const board = useRef();

    // Scroll the message board down when a new message is added 
    useEffect(() => {
        board.current.scrollTop = board.current.scrollHeight;
    }, [messages])

    return (
        <StyledMessageBoard ref={board}>
            {messages.filter((message) => message.room == room).map((message, index) =>
                <Message
                    key={message.id}
                    message={message}
                    received={authcontext.user.user_name != message.sender}
                    chainedMessage={index > 0 && messages[index - 1].sender == message.sender}
                />
            )}
        </StyledMessageBoard>
    )
}

export default MessageBoard