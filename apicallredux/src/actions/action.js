import axios from "axios";


export const FETCH_PICS_START = "FETCH_PICS_START"
export const FETCH_PICS_SUCCESS = "FETCH_PICS_SUCCESS"
export const FETCH_PICS_FAILURE = "FETCH_PICS_START"

export function fetchPics(){
        return dispatch => {
        dispatch({type: FETCH_PICS_START});
        axios.get('https://api.unsplash.com/photos/random/?client_id=f12fb2bc48c6a8c3a65057844c02f3216cd464d696104da5e87283ca78e7da99')
        .then(response => { console.log(response);
            dispatch({ type: FETCH_PICS_SUCCESS, payload: response.data.urls.full})
        })
        .catch(err => {
            dispatch({type: FETCH_PICS_FAILURE, payload: err})
        });
        };        
        }
    