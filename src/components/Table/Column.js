import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

export const ColumnStyled = styled.div`
    display: flex;
    justfiy-content: start;
    align-items: center;
    padding: 10px;
    color: ${props => props.color ? props.color : theme.colors.darkGray}
`;

const Column = ({ label, ...props }) => (
    <ColumnStyled {...props}>
        { label }
    </ColumnStyled>
)

export default Column;