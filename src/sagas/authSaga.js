import { put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants/actionTypes';
import axios from 'axios';

function* handleLogin(action) {
    try {
        const user = action.payload;
        const response = yield axios.get(`http://localhost:8080/api/users`);
        const data = response.data.data;
        if (user.email === 'chienhoo20@gmail.com' && user.password == '123456') {
            yield put({ type: ACTION_TYPES.USER_LOGIN_SUCCESS, payload: user });
        }
    } catch (error) {
        yield put({ type: ACTION_TYPES.USER_LOGIN_FAILED, error });
    }
}

function* handleLogout() {
    try {
        console.log('handle logout');
    } catch (error) {
        yield put({ type: ACTION_TYPES.USER_LOGOUT_FAILED, error });
    }
}

export function* watchUserRequested() {
    yield takeLatest(ACTION_TYPES.USER_LOGIN, handleLogin);
    yield takeLatest(ACTION_TYPES.USER_LOGOUT, handleLogout);
}
