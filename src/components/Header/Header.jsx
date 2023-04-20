import logo from '../../../src/assets/images/logo.svg';
import search from '../../../src/assets/images/search-icon.svg';
import cart from '../../../src/assets/images/cart-icon.svg';
import './header.scss';
import boxIcon from '../../assets/images/box-small-icon.svg';
import userIcon from '../../assets/images/user-small-icon.svg';
import settingIcon from '../../assets/images/setting-small-icon.svg';
import bookMarkIcon from '../../assets/images/book-mark-small-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants/actionTypes';

const Header = () => {
    const useReducer = useSelector((state) => state.useReducer);

    const cartReducer = useSelector((state) => state.cartReducer);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const hanldeSignOut = () => {
        dispatch({ type: ACTION_TYPES.USER_LOGOUT });
    };
    return (
        <header>
            <div className="header-wrapper">
                <ul className="header-menu">
                    <li>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </li>
                    <li>
                        <p>Store</p>
                    </li>
                    <li>
                        <p>Mac</p>
                    </li>
                    <li>
                        <p>iPad</p>
                    </li>
                    <li>
                        <p>iPhone</p>
                    </li>
                    <li>
                        <p>Watch</p>
                    </li>
                    <li>
                        <p>Airpods</p>
                    </li>
                    <li>
                        <p>TV Home</p>
                    </li>
                    <li>
                        <p>Entertainment</p>
                    </li>
                    <li>
                        <p>Accenssories</p>
                    </li>
                    <li>
                        <p>Support</p>
                    </li>
                    <li>
                        <img src={search} alt="" />
                    </li>
                    <li className="header-menu-item">
                        <div className="header-menu-cart" data-title={cartReducer.carts.length}>
                            <img src={cart} alt="" />
                        </div>

                        <div className="header-menu-item-submenu">
                            <div className="header-bag">
                                <div className="header-bag-title">
                                    <h3>Bag</h3>
                                    <button className="header-bag-button button" onClick={() => navigate('/shop/bag')}>
                                        Review Bag
                                    </button>
                                </div>

                                <div className="header-bag-list">
                                    {cartReducer &&
                                        cartReducer.carts.map((cart) => {
                                            return (
                                                <div className="header-bag-item" key={cart.id}>
                                                    <img src={cart.image} alt="" />
                                                    <h3>
                                                        {cart.product} {cart.color} {cart.type.name} x {cart.quantity}
                                                    </h3>
                                                </div>
                                            );
                                        })}

                                    {console.log(cartReducer)}
                                </div>
                                <span>
                                    {cartReducer.carts.length > 0
                                        ? `There are ${cartReducer.carts.length} items in your bag`
                                        : 'There are no items in your bag'}
                                </span>
                            </div>

                            <div className="header-profile">
                                <span>My Profile</span>
                                <div className="header-profile-item">
                                    <img src={boxIcon} alt="" />
                                    <Link>Order</Link>
                                </div>
                                <div className="header-profile-item">
                                    <img src={bookMarkIcon} alt="" />
                                    <Link>Your Saves</Link>
                                </div>
                                <div className="header-profile-item">
                                    <img src={settingIcon} alt="" />
                                    <Link to="/profile">Account</Link>
                                </div>

                                {!useReducer.isLoggedIn ? (
                                    <div className="header-profile-item">
                                        <img src={userIcon} alt="" />
                                        <Link to="/sign-in">Sign In</Link>
                                    </div>
                                ) : (
                                    <div className="header-profile-item">
                                        <img src={userIcon} alt="" />
                                        <div onClick={() => hanldeSignOut()}>Sign Out</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
