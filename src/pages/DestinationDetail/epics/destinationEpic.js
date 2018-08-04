import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import {HOST}   from 'config';
import * as actionTypes  from '../contants';
import {getAttractions} from '../actions';

const getDestinationDetail = action$ =>
    action$.ofType(actionTypes.GET_DESTINATION)
        .mergeMap((action) =>
            ajax({
                url: `${HOST}/destinations/?slug=${action.payload.slug}`,
                responseType: 'json',
                crossDomain: true,
                method: 'GET'
            })
                .flatMap(({response}) => ([
                    {
                        type: actionTypes.GET_DESTINATION_COMPLETE,
                        payload: {
                            detail: response
                        }
                    },
                    getAttractions(),
                ]))
                .catch(error => Rx.Observable.of({
                    type: actionTypes.GET_DESTINATION_ERROR,
                    payload: { error }
                }))
        );

export default combineEpics(
    getDestinationDetail,
);
