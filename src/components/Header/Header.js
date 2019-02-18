
import React from "react";
import styled from "styled-components";
import theme from '../../theme';
import Button from '../Button/Button';
import Dropdown from './Dropdown';

const HeaderStyle = styled.div`
    display: flex;
    height: 100px;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;


const Header = (props) => (
    <HeaderStyle>
        <Dropdown id='listPayment' title='Transaction Type' />
        <Dropdown id='listCurrency' title='Currency' />
        {/*<Button color={theme.colors.white} backColor={theme.colors.green} title={'Search'} /> */}
    </HeaderStyle>
);

export default Header;
