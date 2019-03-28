import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import * as actionTypes from '../contants';


const getBanners = action$ =>
    action$.pipe(
        ofType(actionTypes.GET_BANNERS),
        mergeMap(
            () =>
                ajax({
                    url: 'http://localhost/projects/vninfo-wp/wp-json/wp/v2/destinations/?fields=id,slug,title.rendered,content,acf',
                    responseType: 'json',
                    crossDomain: true,
                    method: 'GET'
                }).pipe(
                    map(data => {
                        console.log(data);
                        return ({
                            type: actionTypes.GET_BANNERS_COMPLETE,
                            payload: {
                                banners: data.response
                            }
                        });
                    }),
                    catchError(error => of({
                        type: 'Error',
                        payload: error.xhr.response,
                        error: true
                    })),
                )

        ),
    );

const getDestinations = action$ =>
    action$.pipe(
        ofType(actionTypes.GET_DESTINATIONS),
        mergeMap(
            () =>
                ajax({
                    url: 'http://localhost/projects/vninfo-wp/wp-json/wp/v2/destinations/?fields=id,slug,title.rendered,content,acf',
                    responseType: 'json',
                    crossDomain: true,
                    method: 'GET'
                }).pipe(
                    map(({ response }) => ({
                        type: actionTypes.GET_DESTINATIONS_COMPLETE,
                        payload: {
                            destinations: response
                        }
                    }))
                )
        ),
    );

export default combineEpics(
    getBanners,
    getDestinations,
);
