import { put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants/actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

function* signInRequest(action) {
    try {
        const user = action.payload;
        const response = yield axios.get(`http://localhost:8080/api/users`);
        const data = response.data.data;
        if (data.find((data) => data.email === user.email && data.password === user.password)) {
            yield put({
                type: ACTION_TYPES.USER_LOGIN_SUCCESS,
                payload: {
                    id: data[0].id,
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                    phone: data[0].phone,
                    email: data[0].email,
                    image: data[0].image,
                    address: data[0].address,
                    role: data[0].role,
                },
            });
        } else {
            toast.error('Login information is incorrect !', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            yield put({ type: ACTION_TYPES.USER_LOGIN_FAILED, error: 'Invalid Credentials' });
        }
    } catch (error) {
        yield put({ type: ACTION_TYPES.USER_LOGIN_FAILED, error });
    }
}

export function* watchUserRequested() {
    yield takeLatest(ACTION_TYPES.USER_LOGIN, signInRequest);
}
