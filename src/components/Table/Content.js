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


const Content = ({ data }) => (
    <WrapperStyled>
        <ContentStyled>
            <LabelStyled primary={true}>ID: </LabelStyled>
            <LabelStyled>{data.id}</LabelStyled>
            <LabelStyled primary={true}>Tracking code: </LabelStyled>
            <LabelStyled>{data.trackingCode}</LabelStyled>
            <LabelStyled primary={true}>Brand ID: </LabelStyled>
            <LabelStyled>{data.brandId}</LabelStyled>
        </ContentStyled>
        <ContentStyled>
            <LabelStyled primary={true}>First 6 digits: </LabelStyled>
            <LabelStyled>{`${data.card.firstSixDigits} XXXX`}`</LabelStyled>
            <LabelStyled primary={true}>Expiry month: </LabelStyled>
            <LabelStyled>{data.card.expiryMonth}</LabelStyled>
            <LabelStyled primary={true}>Expiry year: </LabelStyled>
            <LabelStyled>{data.card.expiryYear}</LabelStyled>
       </ContentStyled>
    </WrapperStyled>
)


export default Content;

