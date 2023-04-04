import CarouselSlider from '../Carousel/CarouselSlider';
import './products.scss';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const naviagte = useNavigate();
    return (
        <section className="products">
            <div className="products-heading">
                Accessories. <span>Essentials that pair perfectly with your favorite devices.</span>
            </div>
            <div className="products-lists">
                <CarouselSlider>
                    <div>
                        <div className="products-item products-item-banner">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-202303?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677648609013"
                                alt=""
                            />
                            <div className="products-item-banner-content">
                                <h3>In with the new.</h3>
                                <p>Discover fresh new colors for your favorite accessories.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="products-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838"
                                alt=""
                            />
                            <ul className="product-colors">
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="products-item-content">
                                <span>New</span>
                                <h3>iPhone 14 Silicone Case with MagSafe - Canary Yellow</h3>
                                <p>$49.00</p>
                            </div>

                            <div
                                className="products-item-button button"
                                onClick={() => naviagte('/shop/iphone/iphone-14-pro')}
                            >
                                Buy
                            </div>
                            <div className="products-item-button-view">Take a close look</div>
                        </div>
                    </div>
                    <div>
                        <div className="products-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838"
                                alt=""
                            />
                            <ul className="product-colors">
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="products-item-content">
                                <span>New</span>
                                <h3>iPhone 14 Silicone Case with MagSafe - Canary Yellow</h3>
                                <p>$49.00</p>
                            </div>
                            <div className="products-item-button button">Buy</div>
                            <div className="products-item-button-view">Take a close look</div>
                        </div>
                    </div>
                    <div>
                        <div className="products-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838"
                                alt=""
                            />
                            <ul className="product-colors">
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="products-item-content">
                                <span>New</span>
                                <h3>iPhone 14 Silicone Case with MagSafe - Canary Yellow</h3>
                                <p>$49.00</p>
                            </div>
                            <div className="products-item-button button">Buy</div>
                            <div className="products-item-button-view">Take a close look</div>
                        </div>
                    </div>
                    <div>
                        <div className="products-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838"
                                alt=""
                            />
                            <ul className="product-colors">
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="products-item-content">
                                <span>New</span>
                                <h3>iPhone 14 Silicone Case with MagSafe - Canary Yellow</h3>
                                <p>$49.00</p>
                            </div>
                            <div className="products-item-button button">Buy</div>
                            <div className="products-item-button-view">Take a close look</div>
                        </div>
                    </div>
                    <div>
                        <div className="products-item">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838"
                                alt=""
                            />
                            <ul className="product-colors">
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="products-item-content">
                                <span>New</span>
                                <h3>iPhone 14 Silicone Case with MagSafe - Canary Yellow</h3>
                                <p>$49.00</p>
                            </div>
                            <div className="products-item-button button">Buy</div>
                            <div className="products-item-button-view">Take a close look</div>
                        </div>
                    </div>
                </CarouselSlider>
            </div>
        </section>
    );
};

export default Products;
