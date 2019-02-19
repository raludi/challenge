
import React from "react";
import styled from "styled-components";
import Dropdown from '../Dropdown/Dropdown';

const HeaderStyle = styled.div`
    display: flex;
    height: 100px;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
`;


const Header = () => (
    <HeaderStyle>
        <Dropdown id='listPayment' title='Transaction Type' />
        <Dropdown id='listCurrency' title='Currency' />
    </HeaderStyle>
);

export default Header;
