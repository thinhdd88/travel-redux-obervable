import * as actionTypes  from '../contants';

export const handleSort = sort => ({type: actionTypes.SORT_DESTINATION, payload: {sort}});
export const handleSearch = searchString => ({type: actionTypes.SEARCH_DESTINATION, payload: {searchString}});
