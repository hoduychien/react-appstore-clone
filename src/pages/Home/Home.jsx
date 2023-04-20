import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
    const useReducer = useSelector((state) => state.useReducer);

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const handleOpenShop = (item) => {
        navigate(`/shop/${item.tag}`, { state: item });
    };

    useEffect(() => {
        const getAllCategories = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/categories`);
            setCategories(res.data.data);
        };
        getAllCategories();
    }, []);
    return (
        <React.Fragment>
            {console.log(useReducer)}
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
                        {categories &&
                            categories.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="home-product-nav-item"
                                        onClick={() => handleOpenShop(item)}
                                    >
                                        <img src={item.image} alt="" />
                                        <h3>{item.name}</h3>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <Banner />
            </section>
        </React.Fragment>
    );
};

export default Home;
