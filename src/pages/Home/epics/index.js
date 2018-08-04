import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes  from '../contants';

const getBanners = action$ =>
    action$.ofType(actionTypes.GET_BANNERS)
        .mergeMap(() =>
            ajax({
                url: 'http://localhost/projects/vninfo-wp/wp-json/wp/v2/destinations/?fields=id,slug,title.rendered,content,acf',
                responseType: 'json',
                crossDomain: true,
                method: 'GET'
            })
                .map(({response}) => ({
                    type: actionTypes.GET_BANNERS_COMPLETE,
                    payload: {
                        banners: response
                    }
                }))
        );

const getDestinations = action$ =>
    action$.ofType(actionTypes.GET_DESTINATIONS)
        .mergeMap(() =>
            ajax({
                url: 'http://localhost/projects/vninfo-wp/wp-json/wp/v2/destinations/?fields=id,slug,title.rendered,content,acf',
                responseType: 'json',
                crossDomain: true,
                method: 'GET'
            })
                .map(({response}) => ({
                    type: actionTypes.GET_DESTINATIONS_COMPLETE,
                    payload: {
                        destinations: response
                    }
                }))
        );

export default combineEpics(
    getBanners,
    getDestinations,
);
