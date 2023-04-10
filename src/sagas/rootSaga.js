import { all } from 'redux-saga/effects';
import { watchUserRequested } from './authSaga';

export function* rootSaga() {
    yield all([watchUserRequested()]);
}
