import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import rightIcon from '../../assets/images/right-icon.svg';
import './footer.scss';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="footer-header">
                        <img src={logo} alt="" />
                        <img src={rightIcon} alt="" />
                        <p> Apple Store Online</p>
                    </div>

                    <div className="footer-menu">
                        <div className="footer-menu-column">
                            <div className="footer-menu-column">
                                <h3>Shop and Learn</h3>
                                <p>Store</p>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                                <p>Watch</p>
                                <p>AirPods</p>
                                <p>TV & Home</p>
                                <p>AirTag</p>
                                <p>Accessories</p>
                                <p>Gift Cards</p>
                            </div>
                            <div className="footer-menu-column">
                                <h3>Apple Wallet</h3>
                                <p>Wallet</p>
                                <p>Apple Card</p>
                                <p>Apple Pay</p>
                                <p>Apple Cash</p>
                            </div>
                        </div>
                        <div className="footer-menu-column">
                            <div className="footer-menu-column">
                                <h3>Account</h3>
                                <p>Manage Your Apple ID</p>
                                <p>Apple Store Account</p>
                                <p>iCloud.com</p>
                            </div>
                            <div className="footer-menu-column">
                                <h3>Entertainment</h3>
                                <p>Apple One</p>
                                <p>Apple TV+</p>
                                <p>Apple Music</p>
                                <p>Apple Arcade</p>
                                <p>Apple Fitness+</p>
                                <p>Apple News+</p>
                                <p>Apple Podcasts</p>
                                <p>Apple Books</p>
                                <p>App Store</p>
                            </div>
                        </div>
                        <div className="footer-menu-column">
                            <h3>Apple Store</h3>
                            <p>Find a Store</p>
                            <p>Genius Bar</p>
                            <p>Today at Apple</p>
                            <p>Apple Camp</p>
                            <p>Apple Store App</p>
                            <p>Refurbished and Clearance</p>
                            <p>Financing</p>
                            <p>Apple Trade In</p>
                            <p>Order Status</p>
                            <p>Shopping Help</p>
                        </div>
                        <div className="footer-menu-column">
                            <div className="footer-menu-column">
                                <h3>For Business</h3>
                                <p>Apple and Business</p>
                                <p>Shop for Business</p>
                            </div>
                            <div className="footer-menu-column">
                                <h3>For Education</h3>
                                <p>Apple and Education</p>
                                <p>Shop for K-12</p>
                                <p>Shop for College</p>
                            </div>
                            <div className="footer-menu-column">
                                <h3>For Healthcare</h3>
                                <p>Apple in Healthcare</p>
                                <p>Health on Apple Watch</p>
                                <p>Health Records on iPhone</p>
                            </div>
                            <div className="footer-menu-column">
                                <h3>For Government</h3>
                                <p>Shop for Government</p>
                                <p>Shop for Veterans and Military</p>
                            </div>
                        </div>
                        <div className="footer-menu-column">
                            <h3>Apple Values</h3>
                            <p>Accessibility</p>
                            <p>Education</p>
                            <p>Environment</p>
                            <p>Inclusion and Diversity</p>
                            <p>Privacy</p>
                            <p>Racial Equity and Justice</p>
                            <p>Supplier Responsibility</p>
                        </div>
                    </div>

                    <p className="footer-subtitle">
                        More ways to shop: <Link to="/">Find an Apple Store</Link> or <Link to="/">other retailer</Link>{' '}
                        near you. Or call 1‑800‑MY‑APPLE.
                    </p>

                    <div className="footer-bottom">
                        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                        <div className="footer-bottom-nav">
                            <div className="footer-bottom-menu">
                                <div className="footer-bottom-menu-item">
                                    <Link to="/">Privacy Policy</Link>
                                </div>
                                <div className="footer-bottom-menu-item">
                                    <Link to="/">Terms of Use</Link>
                                </div>
                                <div className="footer-bottom-menu-item">
                                    <Link to="/">Sales and Refunds</Link>
                                </div>
                                <div className="footer-bottom-menu-item">
                                    <Link to="/">Legal</Link>
                                </div>
                                <div className="footer-bottom-menu-item">
                                    <Link to="/">Site Map</Link>
                                </div>
                            </div>

                            <div className="footer-bottom-button">
                                <Link to="/">United States</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
