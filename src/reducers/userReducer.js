import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
    userInfo: {},
    isLoggedIn: false,
};

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                isLoggedIn: true,
            };

        case ACTION_TYPES.USER_LOGIN_FAILED:
            return {
                ...state,
                userInfo: '',
                isLoggedIn: false,
            };
        case ACTION_TYPES.USER_LOGOUT:
            return {
                ...state,
                userInfo: '',
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default useReducer;
