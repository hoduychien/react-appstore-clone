import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
    userInfo: {},
};

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
            };
        default:
            return state;
    }
};

export default useReducer;
