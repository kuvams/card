import styled, { css } from "styled-components";
import { lightTheme } from "../../styles/Theme.styled";

type ButtonPropsType = {
    primary?: Boolean;
    outlined?: Boolean
}

export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-size: 10px;
    border: none;
    font-weight: 700;
    /* cursor:  */

    
    //primary
    ${props => props.primary && css<ButtonPropsType>`
        color: ${lightTheme.colors.secondary};
        background-color: ${lightTheme.colors.primary};
    `}
    
    //outlined
    ${props => props.outlined && css<ButtonPropsType>`
        border: 2px solid ${lightTheme.colors.primary};
        color: ${lightTheme.colors.primary};
        background-color: transparent;
    `}
`