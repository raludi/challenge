
import React, { Component } from 'react';
import { Header, Row, Column, Table } from '../../components';
import styled from 'styled-components';
import { data } from '../../mock';
import {getTransactions} from '../../net/transactions';
const headers = ['Name', 'Brand', 'Last 4 digits', 'Transaction Type', 'Amount', 'Currency'];

class MainPage extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        getTransactions().then((data) => this.setState({ data }))
    }

    render() {
        return( 
            <div>
                <Header />
                <Table headers={headers} data={this.state.data} />
            </div>
        )
    }
}

export default MainPage;