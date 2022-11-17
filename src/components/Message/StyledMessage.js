import styled from "styled-components";

const StyledMessage = styled.div`
    display: flex;
    align-self: flex-end;
    align-items: flex-end;
    flex-direction: row-reverse;
    margin-top: 10px;
    margin-bottom: 3px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0px 0px 0px 5px;
    }

    .message-box {
        width: fit-content;
        height: fit-content;
        padding: 5px 10px;
        background-color: ${({ theme }) => theme.sentMessage_background};
        border-radius: 6px;

        h4 {
            display: none;
            margin-bottom: 3px;
            color: ${({theme}) => theme.sentMessage_background};
        }

        .message-content {
            font-weight: 600;
        }
        
        .message-content, .message-sendtime {
            color: ${({theme}) => theme.text_color};
        }

        .message-sendtime {
            font-size: 12px;
            text-align: right;
        }
    }

    &.chainedMessage {
        margin: 3px 0px;
        align-items: flex-start;

        img {
            display: none;
        }

        .message-box {
            margin-right: 55px;
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

        .message-box {
            background-color: ${({theme}) => theme.receivedMessage_background};
        }

        &.chainedMessage {
            .message-box {
                margin-left: 55px;
            }
        }
    }

`

export default StyledMessage;