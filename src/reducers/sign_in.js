import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, LOGIN_REQUEST } from '../constants/actionTypes';

const initialState = {
    auth: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return {...state, auth: true, isLoaded: true};
        case UNAUTHENTICATED:
            return {...state, auth: false, isLoaded: true};
        case AUTHENTICATION_ERROR:
            return {...state,
                error: action.msg,
                isLoaded: true};
        case LOGIN_REQUEST:
            return {...state, isLoaded: false};
        default:
            return state;
}
}
