import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import Hero from '../../components/Hero/Hero';
const Home = () => {
    const navigate = useNavigate();
    const handleOpenShop = (type) => {
        navigate(`/shop/${type}`, { state: type });
    };
    return (
        <React.Fragment>
            <section className="home">
                <div className="home-wrapper">
                    <div className="home-header">
                        <p>
                            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or
                            higher.
                            <a href="/">Shop iPhone</a>
                        </p>
                    </div>
                    <Hero title="Store.The best way to buy the products you love." />

                    <div className="home-product-nav">
                        <div className="home-product-nav-item" onClick={() => handleOpenShop('mac')}>
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635"
                                alt=""
                            />
                            <h3>Mac</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1661027785546"
                                alt=""
                            />
                            <h3>Iphone</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437"
                                alt=""
                            />
                            <h3>Ipad</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677701613598"
                                alt=""
                            />
                            <h3>Apple Watch</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885"
                                alt=""
                            />
                            <h3>AirPods</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000"
                                alt=""
                            />
                            <h3>AirTag</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484"
                                alt=""
                            />
                            <h3>Apple TV 4K</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654"
                                alt=""
                            />
                            <h3>HomePod</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677172796005"
                                alt=""
                            />
                            <h3>Accessories</h3>
                        </div>
                        <div className="home-product-nav-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054"
                                alt=""
                            />
                            <h3>Apple Gift Card</h3>
                        </div>
                    </div>
                </div>

                <Banner />

                <Products></Products>
            </section>
        </React.Fragment>
    );
};

export default Home;
