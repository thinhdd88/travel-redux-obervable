import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { flatMap, catchError, mergeMap } from 'rxjs/operators';
import { HOST } from 'config';
import * as actionTypes from '../contants';

const getDestinationDetail = action$ =>
    action$.pipe(
        ofType(actionTypes.GET_ATTRACTIONS),
        mergeMap(() =>
            ajax({
                url: `${HOST}/attractions/?fields=id,slug,name,acf`,
                responseType: 'json',
                crossDomain: true,
                method: 'GET'
            }).pipe(
                flatMap(({ response }) => ([{
                    type: actionTypes.GET_ATTRACTIONS_COMPLETE,
                    payload: {
                        detail: response
                    }
                }])),
                catchError(error => of({
                    type: actionTypes.GET_ATTRACTIONS_ERROR,
                    payload: { error }
                })),
            )
        )
    );

export default combineEpics(
    getDestinationDetail,
);
