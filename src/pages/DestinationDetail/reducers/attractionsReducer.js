import { fromJS } from 'immutable';
import * as actionTypes  from '../contants';

const initState = {
    model: [],
    fetching: false,
    error: '',
};

export default function attractionsReducer(state = fromJS(initState), action) {
    switch (action.type) {
        case actionTypes.GET_ATTRACTIONS: {
            return state.merge({
                ...initState,
                fetching: true,
            });
        }

        case actionTypes.GET_ATTRACTIONS_COMPLETE: {
            return state.merge({
                model: action.payload.detail || [] ,
                fetching: false,
            });
        }

        case actionTypes.GET_ATTRACTIONS_ERROR: {
            return state.merge({
                ...initState,
                error: action.payload.error,
            });
        }

        default:
            return state;
    }
}
