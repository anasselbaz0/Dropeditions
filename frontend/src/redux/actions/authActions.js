export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_SECTION = 'UPDATE_SECTION';

export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: SET_LOGGED_IN,
        payload: isLoggedIn,
    }
}

export const updateProfile = (profile) => {
    return {
        type: UPDATE_PROFILE,
        payload: profile,
    }
}

export const updateSection = (section) => {
    return {
        type: UPDATE_SECTION,
        payload: section,
    }
}
