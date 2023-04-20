import { combineReducers } from 'redux';
import useReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    useReducer,
    cartReducer,
});

export default rootReducer;
