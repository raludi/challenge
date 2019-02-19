
import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

export const RowStyled = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    background-color: ${props => props.isOpen && props.isExpandable ? theme.colors.lightGray : theme.colors.white};
    font-weight: ${props => props.isOpen ? theme.weights.bold : theme.weights.normal}
    border-bottom: 0.5px solid ${theme.colors.mediumGray};
`;

class Row extends Component {

    state = {
        open: false
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { open } = this.state;
        const { isExpandable, expandComponent, data} = this.props;
        return(
            <div>
            <RowStyled isExpandable={isExpandable} isOpen={open} onClick={this.handleClick}>
                {this.props.children}
            </RowStyled>
            {
                open && isExpandable ? (
                    React.createElement(expandComponent, { data })
                )
                : null
            }
            </div>
        )
    }

}

Row.defaultProps = {
    isExpandable: true
}

export default Row;