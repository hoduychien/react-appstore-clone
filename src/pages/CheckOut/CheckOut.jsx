import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './checkOut.scss';
import useCurrency from '../../hooks/useCurrency';
import iconRight from '../../assets/images/left-icon.svg';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants/actionTypes';

const CheckOut = () => {
    const useReducer = useSelector((state) => state.useReducer);

    const cartReducer = useSelector((state) => state.cartReducer);

    const [formatCurrency] = useCurrency();

    const [total, setTotal] = useState();

    const dispatch = useDispatch();

    const hanldeCheckOut = async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/orders`, data);
        if (res.data.statusCode === 201) {
            dispatch({ type: ACTION_TYPES.REMOVE_ALL_PRODUCTS_FROM_CART_SUCCESS });
            navigate('/');
            toast.success('Check out success ~', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const formik = useFormik({
        initialValues: {
            userId: useReducer.userInfo.id,
            email: useReducer.userInfo.email,
            phone: useReducer.userInfo.phone,
            address: useReducer.userInfo.address,
            firstName: useReducer.userInfo.firstName,
            lastName: useReducer.userInfo.lastName,
            products: cartReducer.carts,
            status: 1,
            total: total,
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            if (cartReducer.carts.length > 0) {
                hanldeCheckOut(values);
            } else {
                toast.error('Cart is empty !', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        },
    });

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
        if (!useReducer.isLoggedIn) {
            navigate('/sign-in');
        }
    }, [useReducer.isLoggedIn, cartReducer]);

    return (
        <div>
            <div className="checkout-title">Apple Store - Checkout</div>
            <form className="checkout" onSubmit={formik.handleSubmit}>
                <div className="checkout-form">
                    <div className="checkout-form-title">
                        <h3>Contact infomation</h3>
                        <span>
                            Already have an account? <Link>Login.</Link>
                        </span>
                    </div>
                    <div className="checkout-form-control">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className="checkout-form-title">Shipping address</div>
                    <div className="checkout-form-group">
                        <div className="checkout-form-control">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="checkout-form-control">
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    <div className="checkout-form-control">
                        <textarea
                            cols={4}
                            rows={4}
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className="checkout-form-control">
                        <input
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="checkout-form-action">
                        <Link>
                            <img src={iconRight} alt="" />
                            Return to cart
                        </Link>
                        <button className="button checkout-form-action-button" type="submit">
                            Check Out
                        </button>
                    </div>
                </div>
                <div className="checkout-cart">
                    {cartReducer.carts.map((item) => {
                        return (
                            <div className="checkout-cart-item" key={item.id}>
                                <img src={item.image} alt="" />
                                <h3>
                                    {item.product} {item.color} {item.type.name}{' '}
                                    {item.quantity > 1 ? `* ${item.quantity}` : ''}
                                </h3>
                                <h2>{formatCurrency(item.type.price * item.quantity)}</h2>
                            </div>
                        );
                    })}
                    <div className="checkout-cart-result-top">
                        <div className="checkout-cart-result-top-line">
                            <h3>Subtotal</h3>
                            <p>{total}</p>
                        </div>
                        <div className="checkout-cart-result-top-line">
                            <h3>Shipping</h3>
                            <p>FREE</p>
                        </div>
                    </div>
                    <div className="checkout-cart-result-bottom">
                        <div className="checkout-cart-result-bottom-line">
                            <h3>Total</h3>
                            <div className="checkout-cart-result-bottom-line-right">
                                <h3>{total}</h3>
                                <Link>Get Daily Cash with Apple Card</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
