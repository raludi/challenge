
import React from "react";
import styled from "styled-components";
import theme from '../../theme';
import Button from '../Button/Button';
import FontAwesome from 'react-fontawesome';
import Dropdown from './Dropdown';

const listCurrency = [
    {
        id: 0,
        title: 'Payment',
        selected: true
    },
    {
        id: 1,
        title: 'Credit',
        selected: false
    }
]


const listPayment = [
    {
        id: 0,
        title: 'USD',
        selected: true
    },
    {
        id: 1,
        title: 'EUR',
        selected: false
    },
    {
        id: 2,
        title: 'GBP',
        selected: false
    }
]

const HeaderStyle = styled.div`
    display: flex;
    height: 100px;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
`;


const Header = () => (
    <HeaderStyle>
        <Dropdown title='Transaction Type' width={200} list={listCurrency}></Dropdown>
        <Dropdown title='Currency' width={150} list={listPayment}></Dropdown>
        <Button className="btn" color={theme.colors.white} backColor={theme.colors.green} title={'Search'} />
    </HeaderStyle>
);

export default Header;
