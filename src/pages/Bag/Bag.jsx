import React from 'react';
import './bag.scss';
import bagIcon from '../../assets/images/bag-icon.svg';
import boxIcon from '../../assets/images/box-icon.svg';
import { Link } from 'react-router-dom';

const Bag = () => {
    return (
        <div>
            <div className="bag">
                <div className="bag-top">
                    <div className="bag-total">
                        <h3>Your bag total is $1,782.35.</h3>
                        <span>Free delivery and free returns.</span>
                    </div>
                    <button className="button bag-checkout">Check Out</button>
                </div>
                <div className="bag-item">
                    <img
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-yellow-select-202303?"
                        alt=""
                    />
                    <div className="bag-item-info">
                        <div className="bag-item-info-top">
                            <div className="bag-item-info-top-content">
                                <h3>iPhone 14 128GB Yellow</h3>
                                <div className="bag-item-info-top-action">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <h3 className="bag-item-total">$829.00</h3>
                            </div>
                            <button className="bag-item-info-top-button">Remove</button>
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
                                    Order by 12:15 p.m. <strong>Today from Store — $9.00 Tue, Apr 4 — Free</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bag-item">
                    <img
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-yellow-select-202303?"
                        alt=""
                    />
                    <div className="bag-item-info">
                        <div className="bag-item-info-top">
                            <div className="bag-item-info-top-content">
                                <h3>iPhone 14 128GB Yellow</h3>
                                <div className="bag-item-info-top-action">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <h3 className="bag-item-total">$829.00</h3>
                            </div>
                            <button className="bag-item-info-top-button">Remove</button>
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
                                    Order by 12:15 p.m. <strong>Today from Store — $9.00 Tue, Apr 4 — Free</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bag-item">
                    <div className="bag-item-result">
                        <div className="bag-item-result-top">
                            <div className="bag-item-result-top-line">
                                <h3>Subtotal</h3>
                                <p>$1,658.00</p>
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
                                    <h3>$1,658.00</h3>
                                    <Link>Get Daily Cash with Apple Card</Link>
                                </div>
                            </div>
                            <button className="button bag-item-result-bottom-button">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bag;
