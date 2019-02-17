import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

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
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <ContentStyled>
            <LabelStyled style={{width: '25%', color: theme.colors.cobalt}}>ID: </LabelStyled>
            <LabelStyled style={{width: '75%'}}>7b12415125-a001-53267-a76585-jjft65ufnrtnty</LabelStyled>
            <LabelStyled style={{width: '25%', color: theme.colors.cobalt}}>Tracking code: </LabelStyled>
            <LabelStyled style={{width: '75%'}}>24c22a09-5141-5436-1532-3153151535678</LabelStyled>
            <LabelStyled style={{width: '25%', color: theme.colors.cobalt}}>Brand ID: </LabelStyled>
            <LabelStyled style={{width: '75%'}}>1060</LabelStyled>
        </ContentStyled>
        <ContentStyled>
            <LabelStyled style={{width: '25%', color: theme.colors.cobalt}}>First 6 digits: </LabelStyled>
            <LabelStyled style={{width: '75%'}}>378282 XXXX</LabelStyled>
            <LabelStyled style={{width: '25%', color: theme.colors.cobalt}}>Expiry month: </LabelStyled>
            <LabelStyled style={{width: '75%'}}>03</LabelStyled>
            <LabelStyled style={{width: '25%', color: theme.colors.cobalt}}>Expiry year: </LabelStyled>
            <LabelStyled style={{width: '75%'}}>2020</LabelStyled>
       </ContentStyled>
    </div>
)


export default Content;

