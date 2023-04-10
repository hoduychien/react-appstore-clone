import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './responsive';
import { Link } from 'react-router-dom';
import './productDetail.scss';
import bookmarks from '../../assets/images/bookmark-icon.svg';
import bag from '../../assets/images/bag-icon.svg';
import car from '../../assets/images/car-icon.svg';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productService from '../../services/productServices';
import { useFormik } from 'formik';
import useCurrency from '../../hooks/useCurrency';
import useFormatTime from '../../hooks/useFormatTime';

const ProductDetail = () => {
    const { state } = useLocation();

    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(true);

    const [formatCurrency] = useCurrency();

    const [getHour] = useFormatTime();

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await productService.productDetails(state);
            formik.setValues({
                product: data.name,
                color: data.colors[0].name,
                type: JSON.stringify(data.storage[0]),
                date: Date.now(),
            });
            setProduct(data);
            setLoading(false);
        };
        loadData();
    }, []);

    const formik = useFormik({
        initialValues: {
            product: '',
            color: '',
            type: '',
            date: Date.now(),
        },
        onSubmit: async (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            {!loading ? (
                <form onSubmit={formik.handleSubmit}>
                    {product && (
                        <div>
                            <div className="product-wrapper">
                                <div className="product-text">
                                    <h3>Buy {product.name}</h3>
                                    <p>{product.price}</p>
                                </div>
                                <div className="product-info">
                                    <div className="product-images">
                                        <Carousel responsive={responsive} showDots={true}>
                                            {product.imageSlider.map((item) => {
                                                return (
                                                    <div key={item.id}>
                                                        <div className="product-image">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </Carousel>
                                    </div>

                                    <div className="product-content">
                                        <div className="product-content-wrapper">
                                            <div className="title title-small">
                                                Finish. <span>Pick your favorite.</span>
                                            </div>
                                            <h4>Color - {formik.values.color}</h4>
                                            <div className="product-content-color">
                                                {product.colors.map((item, index) => {
                                                    return (
                                                        <div key={item.id} className="product-content-color-item">
                                                            <input
                                                                type="radio"
                                                                id={item.id}
                                                                name="color"
                                                                value={item.name}
                                                                onChange={formik.handleChange}
                                                                defaultChecked={index === 0}
                                                            />
                                                            <label
                                                                htmlFor={item.id}
                                                                style={{ backgroundColor: item.color }}
                                                                className="product-content-color-item-label"
                                                            ></label>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <p>
                                                Every {formik.values.product} (PRODUCT)RED purchase now contributes
                                                directly to the Global Fund to combat COVID‑19.footnote
                                            </p>

                                            <div className="title title-small">
                                                Storage. <span>How much space do you need?.</span>
                                            </div>

                                            <div className="product-content-storage">
                                                {product.storage.map((item, index) => {
                                                    return (
                                                        <div key={item.id} className="product-content-storage-item">
                                                            <input
                                                                type="radio"
                                                                id={item.id}
                                                                defaultChecked={index === 0}
                                                                name="type"
                                                                value={JSON.stringify(item)}
                                                                onChange={formik.handleChange}
                                                            />
                                                            <label
                                                                htmlFor={item.id}
                                                                className="product-content-storage-item-label"
                                                            >
                                                                <h3>{item.name}</h3>
                                                            </label>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className="title title-small">
                                                Payment options. <span>Select the one that works for you.</span>
                                            </div>
                                            <div className="product-content-payment">
                                                <div className="product-content-payment-item">
                                                    <input type="radio" id="payment-1" name="payment" />
                                                    <label
                                                        htmlFor="payment-1"
                                                        className="product-content-payment-item-label"
                                                    >
                                                        <h3>Ship COD</h3>
                                                    </label>
                                                </div>
                                                <div className="product-content-payment-item">
                                                    <input type="radio" id="payment-2" name="payment" />
                                                    <label
                                                        htmlFor="payment-2"
                                                        className="product-content-payment-item-label"
                                                    >
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
                            </div>

                            <div className="product-result">
                                <div className="product-result-left">
                                    <div className="product-result-title title title-small">
                                        Your new {formik.values.product}. <span>Just the way you want it.</span>
                                    </div>
                                    <img
                                        src="https://as-images.apple.com/is/iphone-14-blue-select-202209_AV2?wid=380&hei=220&fmt=p-jpg&qlt=95&.v=1660777201993"
                                        alt=""
                                    />
                                </div>
                                <div className="product-result-center">
                                    <h3>
                                        {formik.values.product} {JSON.parse(formik.values.type).name}{' '}
                                        {formik.values.color}
                                    </h3>

                                    <p>{formatCurrency(JSON.parse(formik.values.type).price)}</p>
                                    <span>One-time payment</span>
                                    <Link to="/">Get 3% Daily Cash with Apple Card</Link>
                                    <div className="product-result-center-bot">
                                        <h3>Need a moment?</h3>
                                        <span>
                                            Keep all your selections by saving this device to Your Saves, then come back
                                            anytime and pick up right where you left off.
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
                                            Order by {getHour(formik.values.date)}. Delivers to{' '}
                                            <strong>Within 2 hours from Store — $9.00 Tue, Apr 4 — Free</strong>
                                        </span>
                                    </div>
                                    <div className="product-result-right-item">
                                        <button className="button" type="submit">
                                            Add to Bag
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <ProductInfo></ProductInfo>
                        </div>
                    )}
                </form>
            ) : (
                <div>loading...</div>
            )}
        </div>
    );
};

export default ProductDetail;
