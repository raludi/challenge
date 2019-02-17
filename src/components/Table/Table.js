import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import theme from '../../theme';
import Content from './Content';

export const TableStyled = styled.div`
    display:flex;
    flex-direction: column;
    margin: 15px;
`

const Table = ({ headers, data}) => (
    <TableStyled>
        <Row isExpandable={false}>
            {
                headers.map((header) =>
                    <Column color={theme.colors.cobalt} label={header} className={'col'}/>
                )
            }
        </Row>
        {
            data.map((value) => {
                return (
                <Row expandComponent={Content} data={value}>
                    <Column label={value.card.holderName} className={'col'}/>
                    <Column label={value.brandId} className={'col'}/>
                    <Column label={`XXXX ${value.card.lastFourDigits}`} className={'col'}/>
                    <Column label={value.action} className={'col'}/>
                    <Column label={value.amount} className={'col'}/>
                    <Column label={value.currencyCode} className={'col'}/>
                </Row>
                )
            
            })
        }
    </TableStyled>
)

export default Table;
