import './bag.scss';
import bagIcon from '../../assets/images/bag-icon.svg';
import boxIcon from '../../assets/images/box-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import useCurrency from '../../hooks/useCurrency';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants/actionTypes';

const Bag = () => {
    const cartReducer = useSelector((state) => state.cartReducer);

    const [total, setTotal] = useState();

    const [formatCurrency] = useCurrency();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const getTotalPrice = () => {
            let totalPrice = 0;
            cartReducer.carts.map((product) => {
                totalPrice += product.type.price * product.quantity;
            });
            setTotal(formatCurrency(totalPrice));
        };
        getTotalPrice();
    }, [cartReducer]);

    const handleRemoveProduct = (product) => {
        dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: product });
    };
    const handleAddProduct = (product) => {
        dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product });
        console.log(product);
    };
    const handleRemoveProductFromCart = (product) => {
        dispatch({ type: ACTION_TYPES.REMOVE_PRODUCTS_FROM_CART, payload: product });
    };

    return (
        <div>
            <div className="bag">
                <div className="bag-top">
                    <div className="bag-total">
                        <h3>Your bag total is {total}</h3>
                        <span>Free delivery and free returns.</span>
                    </div>
                    <button className="button bag-checkout" onClick={() => navigate('/shop/check-out')}>
                        Check Out
                    </button>
                </div>

                {cartReducer &&
                    cartReducer.carts.map((cart) => {
                        return (
                            <div className="bag-item" key={cart.id}>
                                <img src={cart.image} alt="" />
                                <div className="bag-item-info">
                                    <div className="bag-item-info-top">
                                        <div className="bag-item-info-top-content">
                                            <h3 className="bag-item-info-top-content-name">
                                                {cart.product} {cart.color} {cart.type.name}
                                            </h3>
                                            <div className="bag-item-info-top-action">
                                                <button onClick={() => handleRemoveProduct(cart)}>-</button>
                                                <span>{cart.quantity}</span>
                                                <button onClick={() => handleAddProduct(cart)}>+</button>
                                            </div>
                                            <h3 className="bag-item-total">
                                                {formatCurrency(cart.type.price * cart.quantity)}
                                            </h3>
                                        </div>
                                        <button
                                            className="bag-item-info-top-button"
                                            onClick={() => handleRemoveProductFromCart(cart)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="bag-item-info-bottom">
                                        <div className="bag-item-info-bottom-item">
                                            <img src={bagIcon} alt="" />
                                            <p>
                                                Order now. Pick up, in-store: <strong>Today</strong> at{' '}
                                                <Link>Apple Easton Town Center</Link>
                                            </p>
                                        </div>
                                        <div className="bag-item-info-bottom-item">
                                            <img src={boxIcon} alt="" />
                                            <p>
                                                Order by 12:15 p.m.{' '}
                                                <strong>Today from Store — $9.00 Tue, Apr 4 — Free</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                <div className="bag-item">
                    <div className="bag-item-result">
                        <div className="bag-item-result-top">
                            <div className="bag-item-result-top-line">
                                <h3>Subtotal</h3>
                                <p>{total}</p>
                            </div>
                            <div className="bag-item-result-top-line">
                                <h3>Shipping</h3>
                                <p>FREE</p>
                            </div>
                        </div>
                        <div className="bag-item-result-bottom">
                            <div className="bag-item-result-bottom-line">
                                <h3>Total</h3>
                                <div className="bag-item-result-bottom-line-right">
                                    <h3>{total}</h3>
                                    <Link>Get Daily Cash with Apple Card</Link>
                                </div>
                            </div>
                            <button
                                className="button bag-item-result-bottom-button"
                                onClick={() => navigate('/shop/check-out')}
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bag;
