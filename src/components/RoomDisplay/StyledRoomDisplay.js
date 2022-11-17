import styled from "styled-components";

const StyledRoomDisplay = styled.section`
    display: flex;
    padding-right: 10px;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({theme}) => theme.app_background};

    .room_select {
        display: none;
        background-color: ${({theme}) => theme.receivedMessage_background};
        color: ${({theme}) => theme.text_color};
        border: none;
        border-radius: 7px;
        padding: 5px;

        &:focus {
            outline: none;
        }
    }

    .app_name {
        width: 95%;
        color: ${({theme}) => theme.text_color};
        margin: 5px 0px 0px 0px;
        padding-bottom: 10px;
        border-bottom: 2px solid ${({theme}) => theme.receivedMessage_background};
        span {
            color: #0ece1f;
        }
    }

    .roomButton {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px 10px;
        margin: 5px 0px;
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

    @media(max-width:768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .app_name {
            width: auto;
            border: none;
        }

        .room_buttons {
            display: none;
        }

        .room_select {
            display: block;
            font-size: 1.2rem;
            option {
                font-size: 0.9rem;
                width: fit-content;
            }
        }
    }

`

export default StyledRoomDisplay;