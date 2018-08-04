import { fromJS } from 'immutable';
import * as actionTypes  from '../contants';

const initState = {
    model: {},
    fetching: false,
    error: '',
};

export default function destinationReducer(state = fromJS(initState), action) {
    switch (action.type) {
        case actionTypes.GET_DESTINATION: {
            return state.merge({
                ...initState,
                fetching: true,
            });
        }

        case actionTypes.GET_DESTINATION_COMPLETE: {
            return state.merge({
                model: action.payload.detail ? action.payload.detail[0] : {},
                fetching: false,
            });
        }

        case actionTypes.GET_DESTINATION_ERROR: {
            return state.merge({
                ...initState,
                error: action.payload.error,
            });
        }

        default:
            return state;
    }
}
