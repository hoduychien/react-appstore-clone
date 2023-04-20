import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
    carts: [],
};

const cartReducer = (state = initialState, action) => {
    if (action.type == ACTION_TYPES.ADD_TO_CART_SUCCESS) {
        const newCarts = state.carts;
        const product = newCarts.find(
            (product) =>
                product.cartId === action.payload.cartId &&
                product.color === action.payload.color &&
                product.type.name === action.payload.type.name,
        );
        if (!product) {
            return {
                ...state,
                carts: [...state.carts, action.payload],
            };
        } else {
            product.quantity += 1;

            return {
                ...state,
                carts: [...newCarts],
            };
        }
    }

    if (action.type == ACTION_TYPES.REMOVE_FROM_CART_SUCCESS) {
        const newCarts = state.carts;
        const product = newCarts.find(
            (product) =>
                product.id === action.payload.id &&
                product.color === action.payload.color &&
                product.type.name === action.payload.type.name,
        );
        if (product.quantity > 1) {
            product.quantity -= 1;
            return {
                ...state,
                carts: [...newCarts],
            };
        }

        if (product.quantity == 1) {
            const productIndex = newCarts.findIndex(
                (product) =>
                    product.id === action.payload.id &&
                    product.color === action.payload.color &&
                    product.type.name === action.payload.type.name,
            );
            newCarts.splice(productIndex, 1);
            return {
                ...state,
                carts: [...newCarts],
            };
        }
    }

    if (action.type == ACTION_TYPES.REMOVE_PRODUCTS_FROM_CART_SUCCESS) {
        const newCarts = state.carts;
        const productIndex = newCarts.findIndex(
            (product) =>
                product.id === action.payload.id &&
                product.color === action.payload.color &&
                product.type.name === action.payload.type.name,
        );
        newCarts.splice(productIndex, 1);
        return {
            ...state,
            carts: [...newCarts],
        };
    }

    if (action.type == ACTION_TYPES.REMOVE_ALL_PRODUCTS_FROM_CART_SUCCESS) {
        return {
            ...state,
            carts: [],
        };
    }

    return state;
};

export default cartReducer;
