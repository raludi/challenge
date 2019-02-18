import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

export const WrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    transition: height 2s ease-in;     
`

export const ContentStyled = styled.div`
    background-color: ${theme.colors.lightGray};
    padding: 20px;
    width: 50%;
    display: block;
`;

export const LabelStyled = styled.span`
    font-family: ${theme.fonts.sans};
    font-size: ${theme.sizes.m};
    display: inline-block;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin: 10px 0px 10px 0px;
    width: ${props => props.primary ? '30%' : '70%'}
    color: ${props => props.primary ? theme.colors.cobalt : theme.colors.darkGray}
    `
export const LabelGroup = styled.div`
    
`


const Content = (props) => (
    <WrapperStyled>
        <ContentStyled>
            <LabelStyled primary={true}>ID: </LabelStyled>
            <LabelStyled>7b12415125-a001-53267-a76585-jjft65ufnrtnty</LabelStyled>
            <LabelStyled primary={true}>Tracking code: </LabelStyled>
            <LabelStyled>24c22a09-5141-5436-1532-3153151535678</LabelStyled>
            <LabelStyled primary={true}>Brand ID: </LabelStyled>
            <LabelStyled>1060</LabelStyled>
        </ContentStyled>
        <ContentStyled>
            <LabelStyled primary={true}>First 6 digits: </LabelStyled>
            <LabelStyled>378282 XXXX</LabelStyled>
            <LabelStyled primary={true}>Expiry month: </LabelStyled>
            <LabelStyled>03</LabelStyled>
            <LabelStyled primary={true}>Expiry year: </LabelStyled>
            <LabelStyled>2020</LabelStyled>
       </ContentStyled>
    </WrapperStyled>
)


export default Content;

