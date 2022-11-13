import styled from "styled-components";

const StyledMessageBoard = styled.section`
    width: 100%;
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: ${props => props.theme.chat_background};
    border-radius: 7px;

    ::-webkit-scrollbar{
        border-top-right-radius: 7px;
        background-color: ${props => props.theme.receivedMessage_background};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.app_background};
    }
`;

export default StyledMessageBoard;