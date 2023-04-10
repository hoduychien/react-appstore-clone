import CarouselSlider from '../Carousel/CarouselSlider';
import './products.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Products = (props) => {
    const naviagte = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(props.products);
    }, []);
    const handleOpenProductDetails = (product) => {
        naviagte(`/shop/${props.type}/${product.id}`, { state: product.id });
    };
    return (
        <div>
            {products.length > 0 ? (
                <section className="products">
                    <div className="products-heading">
                        All models. <span>Take your pick.</span>
                    </div>
                    <div className="products-lists">
                        <CarouselSlider>
                            {products.map((product) => {
                                return (
                                    <div key={product.id}>
                                        <div className="products-item">
                                            <img src={product.imageThumbnail} alt="" />
                                            <ul className="product-colors">
                                                {product.colors &&
                                                    product.colors.map((color) => {
                                                        return (
                                                            <li
                                                                key={color.id}
                                                                style={{ backgroundColor: color.color }}
                                                            ></li>
                                                        );
                                                    })}
                                            </ul>
                                            <div className="products-item-content">
                                                <span>{product.status}</span>
                                                <h3>{product.name}</h3>
                                            </div>

                                            <div className="products-item-bottom">
                                                <p>{product.price}</p>
                                                <div
                                                    className="products-item-button button"
                                                    onClick={() => handleOpenProductDetails(product)}
                                                >
                                                    Buy
                                                </div>
                                            </div>

                                            <div className="products-item-button-view">Take a close look</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </CarouselSlider>
                    </div>
                </section>
            ) : (
                <div>No data</div>
            )}
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array,
    thumb: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
};

export default Products;
