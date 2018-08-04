import { fromJS } from 'immutable';
import * as actionTypes  from '../contants';

// TODO: sample data
import banner1 from 'assets/images/banner/banner1.jpg';
import banner2 from 'assets/images/banner/banner2.jpg';
import banner3 from 'assets/images/banner/banner3.jpg';
import banner1_sm from 'assets/images/banner/banner1_sm.jpg';
import banner2_sm from 'assets/images/banner/banner2_sm.jpg';
import banner3_sm from 'assets/images/banner/banner3_sm.jpg';

const banners = [
    {
        lg: banner1,
        sm: banner1_sm
    },
    {
        lg: banner2,
        sm: banner2_sm
    },{
        lg: banner3,
        sm: banner3_sm
    },
]

const initState = fromJS({
    banners: [],
    destinations: [],
    sort: 0,
    searchString: '',
});

export default function home(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_BANNERS_COMPLETE: {
            return state.merge({
                banners,
            });
        }

        case actionTypes.GET_DESTINATIONS_COMPLETE: {
            return state.merge({
                destinations: action.payload.destinations
            });
        }

        case actionTypes.SEARCH_DESTINATION: {
            return state.merge({
                searchString: action.payload.searchString,
            });
        }

        case actionTypes.SORT_DESTINATION: {
            return state.merge({
                sort: action.payload.sort,
            });
        }

        default:
            return state;
    }
}
