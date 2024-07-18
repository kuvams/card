import styled from "styled-components";
import { lightTheme } from "../../styles/Theme.styled";

export const Background = styled.div`
    background-color: ${lightTheme.colors.secondary};
    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    min-height: 350px;
    padding: 10px;
`