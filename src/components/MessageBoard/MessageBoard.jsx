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
        scrollDown()
    }, [messages, room])

    function scrollDown() {
        board.current.scrollTop = board.current.scrollHeight;
    }

    function getRoomMessages() {
        const filteredMessages = messages.filter((message) => message.room == room);
        const roomMessages = filteredMessages.map((message, index) => {
            return (
                <Message
                    key={message.id}
                    message={message}
                    received={authcontext.user.user_name != message.sender}
                    chainedMessage={index > 0 && filteredMessages[index - 1].sender == message.sender}
                />
            )
        })

        return roomMessages;
    }

    return (
        <StyledMessageBoard ref={board}>
           {getRoomMessages()}
        </StyledMessageBoard>
    )
}

export default MessageBoard