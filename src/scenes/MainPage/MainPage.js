
import React, { Component } from 'react';
import { Header, Row, Column, Table } from '../../components';
import { connect } from 'react-redux';
import { getData, actions as transactionActions } from '../../redux/modules/transactions/transactions';
import { bindActionCreators } from 'redux';

const headers = ['Name', 'Brand', 'Last 4 digits', 'Transaction Type', 'Amount', 'Currency'];

class MainPage extends Component {

    componentDidMount() {
        const { transaction } = this.props
        transaction.fetchTransactions()
    }

    render() {
        return( 
            <div>
                <Header />
                <Table headers={headers} data={this.props.data} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data: getData(state)
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        transaction: bindActionCreators(transactionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);