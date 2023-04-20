import { put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants/actionTypes';
import { v1 as uuidv1 } from 'uuid';
function* addToCartRequest(action) {
    try {
        const data = action.payload;
        yield put({
            type: ACTION_TYPES.ADD_TO_CART_SUCCESS,
            payload: {
                id: uuidv1(),
                cartId: data.cartId,
                product: data.product,
                color: data.color,
                type: data.type,
                image: data.image,
                quantity: 1,
            },
        });
    } catch (error) {
        yield put({ type: ACTION_TYPES.ADD_TO_CART_FAILED, error });
    }
}

function* removeCartRequest(action) {
    try {
        console.log(action);
        yield put({
            type: ACTION_TYPES.REMOVE_FROM_CART_SUCCESS,
            payload: action.payload,
        });
    } catch (e) {
        yield put({ type: ACTION_TYPES.REMOVE_FROM_CART_FAILED, e });
    }
}

function* removeProductsRequest(action) {
    try {
        yield put({
            type: ACTION_TYPES.REMOVE_PRODUCTS_FROM_CART_SUCCESS,
            payload: action.payload,
        });
    } catch (e) {
        yield put({ type: ACTION_TYPES.REMOVE_PRODUCTS_FROM_CART_FAILED, e });
    }
}

export function* watchCartRequested() {
    yield takeLatest(ACTION_TYPES.ADD_TO_CART, addToCartRequest);
    yield takeLatest(ACTION_TYPES.REMOVE_FROM_CART, removeCartRequest);
    yield takeLatest(ACTION_TYPES.REMOVE_PRODUCTS_FROM_CART, removeProductsRequest);
}
