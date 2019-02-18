import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const ButtonStyle = styled.button`
    padding: 2px;
    margin: 5px;
    background-color: ${props => props.backColor ? props.backColor : theme.colors.green};
    color: ${props => props.color};
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 1.5;
    transition: color .15s 
    box-shadow: none;
    line-height: 2em;
    border: none;
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