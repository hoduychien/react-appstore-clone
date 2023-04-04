import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SingIn from './pages/SignIn/SingIn';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Bag from './pages/Bag/Bag';
const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/sign-in" element={<SingIn />} />
                        <Route path="/shop/:type" element={<Shop />} />
                        <Route path="/shop/:type/:id" element={<ProductDetail />} />
                        <Route path="/shop/bag" element={<Bag />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        </React.Fragment>
    );
};

export default App;