import styled from "styled-components";

const StyledLogin = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.app_background};

    .login-container {
        display: flex;
        border-radius: 4px;
        flex-direction: column;
        background-color: gray;
        padding: 15px 10px;

        .login-title {
            color: #fff;
            margin-bottom: 20px;
            text-align: center;
        }
        .green-span {
            color: #0ece1f;
        }

        .login-button {
            display: flex;
            padding: 5px 10px;
            background-color: #24292d;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            .icon {
                width: 23px;
                fill: #fff;
                margin-right: 15px;
            }
        }
    }
`

export default StyledLogin;