import {SET_LOGGED_IN, UPDATE_PROFILE, UPDATE_SECTION} from "../actions/authActions";

const initialeState = {
    loggedIn: false,
    profile: {},
    section: 0,
}

export function authReducer(state = initialeState, action) {
    switch (action.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.payload,
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        case UPDATE_SECTION:
            return {
                ...state,
                section: action.payload,
            }
        default:
            return state;
    }
}