import { combineEpics } from 'redux-observable';
import destinationEpic from './destinationEpic';
import attractionsEpic from './attractionsEpic';

export default combineEpics(
    destinationEpic,
    attractionsEpic
);
