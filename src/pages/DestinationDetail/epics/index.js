import { combineEpics } from 'redux-observable';
import {default as  destinationEpic} from './destinationEpic';
import {default as  attractionsEpic} from './attractionsEpic';

export default combineEpics(
    destinationEpic,
    attractionsEpic
);
