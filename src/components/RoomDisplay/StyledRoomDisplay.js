import styled from "styled-components";

const StyledRoomDisplay = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({theme}) => theme.app_background};

    .roomButton {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px 10px;
        margin: 5px 10px;
        background-color: ${({theme}) => theme.receivedMessage_background};
        font-size: 20px;
        color: ${({theme}) => theme.text_color};
        border: none;
        border-radius: 7px;
        cursor: pointer; 

        &.active {
            color: white;
            .roomIcon > svg {
                fill: white;
            }    
        }


        .roomIcon {
            margin-right: 10px;
            display: inherit;
            align-items: center;
            svg {
                width: 20px;
                height: auto;
                fill: #eee;
            }
        }
    }
`

export default StyledRoomDisplay;