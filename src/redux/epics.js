import { combineEpics } from 'redux-observable';
import {homeEpic} from 'pages/Home';
import {destinationDetailEpic} from 'pages/DestinationDetail';

const rootEpic = combineEpics(
    homeEpic,
    destinationDetailEpic
);

export default rootEpic;

