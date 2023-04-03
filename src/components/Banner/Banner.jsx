import React from 'react';
import './banner.scss';
import CarouselSlider from '../Carousel/CarouselSlider';
const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="banner-title">
                The latest. <span>Take a look at what’s new, right now.</span>
            </div>
            <CarouselSlider>
                <div>
                    <div className="banner-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677558944069"
                            alt=""
                        />
                        <div className="banner-item-content-white">
                            <h4>Iphone 14</h4>
                            <h3>Wonderfull.</h3>
                            <p>From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545"
                            alt=""
                        />
                        <div className="banner-item-content-black">
                            <h4>MACBOOK PRO 14” AND 16”</h4>
                            <h3>Mover. Maker. Boundary breaker.</h3>
                            <p>Mover. Maker. Boundary breaker.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202303?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677224522003"
                            alt=""
                        />
                        <div className="banner-item-content-black">
                            <h4>APPLE WATCH SERIES 8</h4>
                            <h3>A healthy leap ahead.</h3>
                            <p>From $399 or $16.62/mo.per month for 24 mo.monthsFootnote†</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053"
                            alt=""
                        />
                        <div className="banner-item-content-white">
                            <h4>IPAD</h4>
                            <h3>Lovable. Drawable. Magical.</h3>
                            <p>From $449 or $37.41/mo.per month for 12 mo.monthsFootnote†</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202303?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677311465897"
                            alt=""
                        />
                        <div className="banner-item-content-black">
                            <h4>IPHONE 14 PRO</h4>
                            <h3>Pro. Beyond.</h3>
                            <p>From $999 or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1660686053448"
                            alt=""
                        />
                        <div className="banner-item-content-white">
                            <h4>APPLE WATCH ULTRA</h4>
                            <h3>Adventure awaits.</h3>
                            <p>From $799 or $33.29/mo.per month for 24 mo.monthsFootnote†</p>
                        </div>
                    </div>
                </div>
            </CarouselSlider>
        </div>
    );
};

export default Banner;
