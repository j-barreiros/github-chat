import styled from "styled-components";

const StyledMessage = styled.div`
    display: flex;
    align-self: flex-end;
    align-items: flex-end;
    flex-direction: row-reverse;
    margin-top: 10px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0px 0px 0px 5px;
    }

    div {
        width: fit-content;
        height: fit-content;
        padding: 10px 10px;
        background-color: ${({ theme }) => theme.sentMessage_background};
        border-radius: 6px;

        h4 {
            display: none;
            margin-bottom: 3px;
            color: ${({theme}) => theme.sentMessage_background};
        }

        p {
            color: white;
        }
    }

    &.chainedMessage {
        align-items: flex-start;

        img {
            display: none;
        }

        div {
            margin: 0px 55px 5px 0px;
            h4 {
                display: none;
            }
        }
    }

    &.receivedMessage {
        align-self: flex-start;
        flex-direction: row;
        padding: 0px;

        img {
            margin: 0px 5px 0px 0px;
        }

        h4 {
            display: block;
        }

        div {
            background-color: ${({theme}) => theme.receivedMessage_background};
        }

        &.chainedMessage {
            div {
                margin: 0px 0px 5px 55px;
            }
        }
    }

`
/* 
const teste = styled.div`
    display: flex;
    margin: ${({ chainedMessage, received }) => {
        return (chainedMessage ? `
            5px
            ${received ? '0px' : '55px'} 
            0px
            ${received ? '55px' : '0px'}
            `
            : '15px 0px 0px 0px')
    }};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    align-items: center;
    align-self: ${({ received }) => received ? 'flex-start' : 'flex-end'};
    flex-direction: ${({ received }) => received ? 'row' : 'row-reverse'};
    
    
    img {
        display: ${({ chainedMessage }) => chainedMessage ? 'none' : 'block'};
        width: 50px;
        height: 50px;
        margin: 0px 5px;
        border-radius: 50%;
    }
    
    div {
        height: fit-content;
        padding: 10px;
        background-color: ${({ received, theme }) => received ? theme.receivedMessage_background : theme.sentMessage_background};
        border-radius: 10px;
        
        h4 {
            display: ${({ received, chainedMessage }) => received && !chainedMessage ? 'block' : 'none'};
            text-align: ${({ received }) => received ? 'left' : 'right'};;
            &:hover {
                text-decoration: underline;
            }
        }

        p {
            color: ${props => props.theme.text_color};
            font-weight:500;
        }
    };
    
`
*/
export default StyledMessage;