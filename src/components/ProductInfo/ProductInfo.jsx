import './productInfo.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductInfo = (props) => {
    return (
        <div>
            <div className="product-param">
                {console.log()}
                <h3>What’s in the Box</h3>
                <div className="product-box">
                    <div className="product-box-item">
                        <span>{props.box[0].name}</span>
                        <img src={props.box[0].image} alt="" />
                    </div>
                    <div className="product-box-item">
                        <span>{props.box[1].name}</span>
                        <img src={props.box[1].image} alt="" />
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

ProductInfo.propTypes = {
    box: PropTypes.array,
};

export default ProductInfo;
