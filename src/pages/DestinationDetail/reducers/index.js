import { combineReducers } from 'redux-immutable';
import destinationReducer from './destinationReducer';
import attractionsReducer from './attractionsReducer';

export default combineReducers({
    destinationReducer,
    attractionsReducer
})
