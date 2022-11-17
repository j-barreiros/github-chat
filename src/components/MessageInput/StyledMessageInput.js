import styled from "styled-components";

const StyledMessageInput = styled.form`
    display: flex;
    width: 100%;
    min-height: 10%;
    background-color: ${props => props.theme.receivedMessage_background};
    align-items: center;
    padding: 0px 5px;
    
    input[type='text'] {
        background-color: ${props => props.theme.app_background};
        color: ${props => props.theme.text_color};
        flex: 1;
        border-radius: 5px;
        padding: 10px 10px;
        border: none;   
        margin: 10px 10px;
        font-size: 17px;
    }

    input[type='text']:focus {
        outline: none;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({theme}) => theme.sentMessage_background};
        fill: #ccc;
        border-radius: 50%;
        padding: 10px 10px;
        margin-right: 20px;
        border: none;
        cursor: pointer;

        svg {
            width: 20px;
        }
    }
`;

export default StyledMessageInput;