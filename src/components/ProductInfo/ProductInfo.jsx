import React from 'react';
import './productInfo.scss';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
    return (
        <div>
            <div className="product-param">
                <h3>What’s in the Box</h3>
                <div className="product-box">
                    <div className="product-box-item">
                        <span>iPhone 14</span>
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-witb-202209?wid=172&hei=392&fmt=jpeg&qlt=95&.v=1660679135494"
                            alt=""
                        />
                    </div>
                    <div className="product-box-item">
                        <span>USB-C to Lightning Cable</span>
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-cables-witb-202209?wid=92&hei=392&fmt=jpeg&qlt=95&.v=1660679135172"
                            alt=""
                        />
                    </div>
                </div>

                <h4>Our environmental goals.</h4>
                <p>
                    As part of our efforts to reach <Link>carbon neutrality by 2030</Link>, iPhone 14 and iPhone 14 Plus
                    do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that
                    supports fast charging and is compatible with USB‑C power adapters and computer ports.
                </p>
                <p>
                    We encourage you to re‑use your current USB‑A to Lightning cables, power adapters, and headphones,
                    which are compatible with these iPhone models. But if you need any new Apple power adapters or
                    headphones, they are available for purchase.
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;
