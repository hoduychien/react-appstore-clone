import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import './shop.scss';

const Shop = () => {
    return (
        <div>
            <section className="shop">
                <Hero title={'Shop Mac'} />
                <Products />
                <Banner />
            </section>
        </div>
    );
};

export default Shop;
