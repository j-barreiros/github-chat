import styled from "styled-components";

const StyledApp = styled.main`
    
    background-color: ${props => props.theme.app_background};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
`;

export default StyledApp;