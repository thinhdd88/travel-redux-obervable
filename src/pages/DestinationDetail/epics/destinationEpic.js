import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { flatMap, catchError, mergeMap } from 'rxjs/operators';
import { HOST } from 'config';
import * as actionTypes from '../contants';
import { getAttractions } from '../actions';

const getDestinationDetail = action$ =>
    action$.pipe(
        ofType(actionTypes.GET_DESTINATION),
        mergeMap(action =>
            ajax({
                url: `${HOST}/destinations/?slug=${action.payload.slug}`,
                responseType: 'json',
                crossDomain: true,
                method: 'GET'
            }).pipe(
                flatMap(({ response }) => ([
                    {
                        type: actionTypes.GET_DESTINATION_COMPLETE,
                        payload: {
                            detail: response
                        }
                    },
                    getAttractions(),
                ])),
                catchError(error => of({
                    type: actionTypes.GET_DESTINATION_ERROR,
                    payload: { error }
                }))
            )
        ),
    );

export default combineEpics(
    getDestinationDetail,
);
