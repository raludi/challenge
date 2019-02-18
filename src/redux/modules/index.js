
import { combineReducers } from 'redux';
import filters from './filters/filters';
import transactions from './transactions/transactions';

export default combineReducers({
    filters,
    transactions
  })