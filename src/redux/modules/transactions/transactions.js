
import { initialState } from './initialState';
import { getTransactions, filterTransactions } from './../../../net/transactions/index';
import { createSelector } from 'reselect';
import types from './types';

const transactions = (state = initialState, { type, payload }) => {
    switch(type) {
        case types.GET_DATA:
            return {
                ...state,
                transactions: [...payload] 
            }
        default: 
            return {
                ...state
            }
    }
}

export const actions = {
    fetchTransactions() {
        return dispatch => {
            return getTransactions().then((response) => {
                dispatch({
                    type: types.GET_DATA,
                    payload: response
                })
            })
        }
    },
    filterTransactions(filters) {
        return dispatch => {
            return filterTransactions(filters).then((response) => {
                dispatch({
                    type: types.GET_DATA,
                    payload: response
                })
            })
        }
    }
}

const listTransactions = (state) => state.transactions.transactions || initialState;
export const getData = createSelector(listTransactions, filterState => filterState);

export default transactions;