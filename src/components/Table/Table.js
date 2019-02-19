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
    min-width: 840px;
    max-height: 600px;
`

const Table = ({ headers, data}) => (
    <div style={{overflow: 'auto'}}>
        <TableStyled>
            <Row isExpandable={false}>
                {
                    headers.map((header) =>
                        <Column style={{fontWeight: theme.weights.bold}} color={theme.colors.cobalt} label={header} className={'col'}/>
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
    </div>
)

export default Table;
