import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import {HOST}   from 'config';
import * as actionTypes  from '../contants';

const getDestinationDetail = action$ =>
    action$.ofType(actionTypes.GET_ATTRACTIONS)
        .mergeMap(() =>
            ajax({
                url: `${HOST}/attractions/?fields=id,slug,name,acf`,
                responseType: 'json',
                crossDomain: true,
                method: 'GET'
            })
                .flatMap(({response}) => ([{
                    type: actionTypes.GET_ATTRACTIONS_COMPLETE,
                    payload: {
                        detail: response
                    }
                }]))
                .catch(error => Rx.Observable.of({
                    type: actionTypes.GET_ATTRACTIONS_ERROR,
                    payload: { error }
                }))
        );

export default combineEpics(
    getDestinationDetail,
);
