import { data } from '../data/share-market-data';

export const getDetails = () => {
    return dispatch => {
        return dispatch({ type: 'Fetch_Details', payload: data() }); //here we can place the api call
    }
}