
import types from './types';

const initialState = {
    filters: []
}

export default filterReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case types.ADD_FILTER: 
            return {
                ...state,
                
            }
        case types.REMOVE_FILTER: 
            return {
                ...state
            }
    }
}

export const actions = {
    addFilter = (filter) => {
        return {
            type: types.ADD_FILTER,
            payload: filter
        }
    },
    removeFilter = (filter) => {
        return {
            type: types.REMOVE_FILTER,
            payload: filter
        }
    }
}