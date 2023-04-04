import logo from '../../../src/assets/images/logo.svg';
import search from '../../../src/assets/images/search-icon.svg';
import cart from '../../../src/assets/images/cart-icon.svg';
import './header.scss';
import boxIcon from '../../assets/images/box-small-icon.svg';
import userIcon from '../../assets/images/user-small-icon.svg';
import settingIcon from '../../assets/images/setting-small-icon.svg';
import bookMarkIcon from '../../assets/images/book-mark-small-icon.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <ul className="header-menu">
                    <li>
                        <img src={logo} alt="" />
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
                        <div className="header-menu-cart" data-title="1">
                            <img src={cart} alt="" />
                        </div>

                        <div className="header-menu-item-submenu">
                            <div className="header-bag">
                                <div className="header-bag-title">
                                    <h3>Bag</h3>
                                    <button className="header-bag-button button">Review Bag</button>
                                </div>
                                <div className="header-bag-list">
                                    <div className="header-bag-item">
                                        <img
                                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?"
                                            alt=""
                                        />
                                        <h3>iPhone 14 128GB Blue</h3>
                                    </div>
                                </div>
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
                                    <Link>Account</Link>
                                </div>
                                <div className="header-profile-item">
                                    <img src={userIcon} alt="" />
                                    <Link to="/sign-in">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
