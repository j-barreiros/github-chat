import styled from "styled-components";

const StyledApp = styled.main`
    height: 100vh;
    display:flex;
    background-color: ${props => props.theme.app_background};
    padding: 20px 30px;
    .chat {
        flex: 6;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export default StyledApp;