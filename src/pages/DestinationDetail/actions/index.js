import * as actionTypes  from '../contants';

export const getDestinationDetail = (slug) => ({type: actionTypes.GET_DESTINATION, payload: {slug}});
export const getAttractions = () => ({type: actionTypes.GET_ATTRACTIONS});

