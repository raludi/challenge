import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const ButtonStyle = styled.button`
    margin: 5px;
    background-color: ${props => props.backColor};
    color: ${props => props.color};
    font-family: ${theme.fonts.sans};
    &: hover {
    background-color: ${props => props.backColor ? props.backColor : theme.colors.cobalt};
    color: ${props => props.color};
}
`;

const Button = ({ title, className, color, backColor, handleClick, handleChange, ...props }) => (
    <ButtonStyle 
        className={className} 
        color={color}
        backColor={backColor}
        onClick={handleClick}
        onChange={handleChange}
        {...props}
    >
        { title }
    </ButtonStyle>
)

export default Button;