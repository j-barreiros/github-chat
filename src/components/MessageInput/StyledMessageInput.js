import styled from "styled-components";

const StyledMessageInput = styled.form`
    display: flex;
    width: 100%;
    height: 10%;
    background-color: ${props => props.theme.receivedMessage_background};
    
    input[type='text'] {
        background-color: ${props => props.theme.app_background};
        color: ${props => props.theme.text_color};
        flex: 1;
        border-radius: 5px;
        padding: 0px 10px;
        border: none;   
        margin: 10px 10px;
        font-size: 17px;
    }

    input[type='text']:focus {
        outline: none;
    }
    
    button {
        background-color: ${props => props.theme.app_background};
        color: ${props => props.theme.text_color};
        padding: 5px;
        margin: 10px 5px; 
        border: none;
        cursor: pointer;
    }
`;

export default StyledMessageInput;