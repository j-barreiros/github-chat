import styled from "styled-components";

const StyledApp = styled.main`
    height: 100%;
    display:flex;
    background-color: ${props => props.theme.app_background};
    padding: 20px 30px;
    .chat {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media(max-width:768px) {
        padding: 5px 10px;
        flex-direction: column;
        justify-content: space-evenly;
        .chat {
            height: 90%;
        }
    }
`;

export default StyledApp;