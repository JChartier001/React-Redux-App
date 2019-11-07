import axios from "axios";

export const FETCH_PICS_START = "FETCH_PICS_START"
export const FETCH_PICS_SUCCESS = "FETCH_PICS_SUCCESS"
export const FETCH_PICS_FAILURE = "FETCH_PICS_START"

export function fetchPics(){
    return dispatch => {
        dispatch({type: FETCH_PICS_START});
        axios.get('https://api.unsplash.com/photos/random/?client_id=ed8539051ed3c2c9b1ca260c8a8cff80c457896697b22ec9894392e464120a87')    .then(response => {
            dispatch({ type: FETCH_PICS_SUCCESS, payload: response.full})
        })
        .catch(err => {
            dispatch({type: FETCH_PICS_FAILURE, payload: err})
        });
        };        
        }
    