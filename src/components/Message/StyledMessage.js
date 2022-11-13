import styled from "styled-components";

const StyledMessage = styled.div`
    width: fit-content;
    margin: 5px 0px;
    padding: 5px;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.theme.text_color};
    font-weight: 500;

    img {
        width: 50px;
        height: auto;
        border-radius: 50%;
    }

    div {
        padding: 10px;
        margin: 0px 10px;
        border-radius: 10px;
    }

    &.sentMessage {
        align-self: flex-end;
        flex-direction: row-reverse;
    }
    
    &.sentMessage > div {
        background-color: ${props => props.theme.sentMessage_background};
        border-bottom-right-radius: 0px;
    }
    
    &.receivedMessage {
    }
    
    &.receivedMessage > div {
        background-color: ${props => props.theme.receivedMessage_background};
        border-bottom-left-radius: 0px;
    }
`

export default StyledMessage;