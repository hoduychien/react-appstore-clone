import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './responsive';
import { Link, useNavigate } from 'react-router-dom';
import './productDetail.scss';
import bookmarks from '../../assets/images/bookmark-icon.svg';
import bag from '../../assets/images/bag-icon.svg';
import car from '../../assets/images/car-icon.svg';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

const ProductDetail = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section className="product-wrapper">
                <div className="product-text">
                    <h3>Buy iPhone 14 Pro</h3>
                    <p>From $429 or $17.87/mo.per month for 24 mo.months</p>
                </div>
                <div className="product-info">
                    <div className="product-images">
                        <Carousel responsive={responsive} showDots={true}>
                            <div>
                                <div className="product-image">
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="product-image">
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660753617560"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="product-image">
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1671474922844"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="product-image">
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1671474923618"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>

                    <div className="product-content">
                        <div className="product-content-wrapper">
                            <div className="title title-small">
                                Finish. <span>Pick your favorite.</span>
                            </div>
                            <h4>Color - Deep Purple</h4>
                            <div className="product-content-color">
                                <div className="product-content-color-item">
                                    <input type="radio" id="color-1" name="color" />
                                    <label htmlFor="color-1" className="product-content-color-item-label"></label>
                                </div>
                                <div className="product-content-color-item">
                                    <input type="radio" id="color-2" name="color" />
                                    <label htmlFor="color-2" className="product-content-color-item-label"></label>
                                </div>
                                <div className="product-content-color-item">
                                    <input type="radio" id="color-3" name="color" />
                                    <label htmlFor="color-3" className="product-content-color-item-label"></label>
                                    <span className="colornav-logo-productred"></span>
                                </div>
                            </div>

                            <p>
                                Every iPhone SE (PRODUCT)RED purchase now contributes directly to the Global Fund to
                                combat COVID‑19.footnote
                            </p>

                            <div className="title title-small">
                                Storage. <span>How much space do you need?.</span>
                            </div>

                            <div className="product-content-storage">
                                <div className="product-content-storage-item">
                                    <input type="radio" id="storage-1" name="storage" />
                                    <label htmlFor="storage-1" className="product-content-storage-item-label">
                                        <h3>64GB</h3>
                                    </label>
                                </div>
                                <div className="product-content-storage-item">
                                    <input type="radio" id="storage-2" name="storage" />
                                    <label htmlFor="storage-2" className="product-content-storage-item-label">
                                        <h3>128GB</h3>
                                    </label>
                                </div>
                                <div className="product-content-storage-item">
                                    <input type="radio" id="storage-3" name="storage" />
                                    <label htmlFor="storage-3" className="product-content-storage-item-label">
                                        <h3>512GB</h3>
                                    </label>
                                </div>
                                <div className="product-content-storage-item">
                                    <input type="radio" id="storage-4" name="storage" />
                                    <label htmlFor="storage-4" className="product-content-storage-item-label">
                                        <h3>1TB</h3>
                                    </label>
                                </div>
                            </div>

                            <div className="title title-small">
                                Payment options. <span>Select the one that works for you.</span>
                            </div>
                            <div className="product-content-payment">
                                <div className="product-content-payment-item">
                                    <input type="radio" id="payment-1" name="payment" />
                                    <label htmlFor="payment-1" className="product-content-payment-item-label">
                                        <h3>Ship COD</h3>
                                    </label>
                                </div>
                                <div className="product-content-payment-item">
                                    <input type="radio" id="payment-2" name="payment" />
                                    <label htmlFor="payment-2" className="product-content-payment-item-label">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
                                            alt=""
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="product-result">
                <div className="product-result-left">
                    <div className="product-result-title title title-small">
                        Your new iPhone 14. <span>Just the way you want it.</span>
                    </div>
                    <img
                        src="https://as-images.apple.com/is/iphone-14-blue-select-202209_AV2?wid=380&hei=220&fmt=p-jpg&qlt=95&.v=1660777201993"
                        alt=""
                    />
                </div>
                <div className="product-result-center">
                    <h3>iPhone 14 128GB Blue</h3>
                    <p>$829.00</p>
                    <span>One-time payment</span>
                    <Link to="/">Get 3% Daily Cash with Apple Card</Link>
                    <div className="product-result-center-bot">
                        <h3>Need a moment?</h3>
                        <span>
                            Keep all your selections by saving this device to Your Saves, then come back anytime and
                            pick up right where you left off.
                        </span>
                        <Link>
                            <img src={bookmarks} alt="" />
                            <span>Save for later</span>
                        </Link>
                    </div>
                </div>
                <div className="product-result-right">
                    <div className="product-result-right-item">
                        <img src={bag} alt="" />
                        <span>
                            Order now. Pick up, in store: <br />
                            <strong>Today</strong> at <Link to="/">Apple Easton Town Center</Link>
                        </span>
                    </div>
                    <div className="product-result-right-item">
                        <img src={car} alt="" />
                        <span>
                            Order by 10:15 a.m.. Delivers to{' '}
                            <strong>Within 2 hours from Store — $9.00 Tue, Apr 4 — Free</strong>
                        </span>
                    </div>
                    <div className="product-result-right-item">
                        <button className="button" onClick={() => navigate('/shop/bag')}>
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>

            <ProductInfo></ProductInfo>
        </div>
    );
};

export default ProductDetail;
