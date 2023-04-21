import { put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants/actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

function* signInRequest(action) {
    try {
        const user = action.payload;
        const response = yield axios.get(`http://localhost:8080/api/users`);
        const data = response.data.data;

        const userfind = data.find((data) => data.email === user.email && data.password === user.password);

        if (userfind) {
            yield put({
                type: ACTION_TYPES.USER_LOGIN_SUCCESS,
                payload: {
                    id: userfind.id,
                    firstName: userfind.firstName,
                    lastName: userfind.lastName,
                    phone: userfind.phone,
                    email: userfind.email,
                    image: userfind.image,
                    address: userfind.address,
                    role: userfind.role,
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
