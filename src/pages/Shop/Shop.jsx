// import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import './shop.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productService from '../../services/productServices';

const Shop = () => {
    const { state } = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const data = await productService.products(state.id);
            setProducts(data);
            setLoading(false);
        }

        loadData();
    }, []);

    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <section className="shop">
                    <Hero title={state.name} />
                    <Products products={products} type={state.tag} />
                    {/* <Banner /> */}
                </section>
            )}
        </div>
    );
};

export default Shop;
