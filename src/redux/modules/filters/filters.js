
import types from './types';
import { createSelector } from 'reselect';
import { initialState } from './initialState';


const filters = (state = initialState, { type, payload }) => {
    switch(type) {
        case types.UPDATE_FILTER: 
            return {
                ...state,
                ...state[payload.id][payload.idx].selected = !payload.selected
            }
        default:
            return {
                ...state
            };
    }
}

export const actions = {
    updateFilter(filter) {
        return {
            type: types.UPDATE_FILTER,
            payload: filter
        }
    },
}

const filterId = (state, id) => state.filters[id] || initialState;
export const getFilters = createSelector(filterId, filterState => filterState);

export default filters;