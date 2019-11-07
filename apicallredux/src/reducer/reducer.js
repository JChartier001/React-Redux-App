import {FETCH_PICS_START, FETCH_PICS_SUCCESS, FETCH_PICS_FAILURE} from "../actions/action"

const initialState={
    pics: null,
    isLoading: false,
    error: null
}

    
export function reducer (state=initialState, action){
    switch(action.type) {
        case FETCH_PICS_START:
            return {
                ...state,
                isLoading: true
            };
            case FETCH_PICS_SUCCESS:
                return{
                    ...state,
                    pic: action.payload,
                    isLoading: false
                };
                case FETCH_PICS_FAILURE:
                    return {
                        isLoading: false,
                        error: action.payload
                };
                default:
                    return state;
    }
}