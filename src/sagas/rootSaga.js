import { all } from 'redux-saga/effects';
import { watchUserRequested } from './authSaga';
import { watchCartRequested } from './cartSaga';

export function* rootSaga() {
    yield all([watchUserRequested(), watchCartRequested()]);
}
