import styled from "styled-components";

const StyledApp = styled.main`
    height: 100vh;
    display:flex;
    background-color: ${props => props.theme.app_background};
    .chat {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    padding: 20px 30px;
`;

export default StyledApp;