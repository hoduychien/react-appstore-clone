import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SingIn';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Bag from './pages/Bag/Bag';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SignUp/SignUp';
import CheckOut from './pages/CheckOut/CheckOut';
import Profile from './pages/Profile/Profile';
import ProfileInfo from './pages/Profile/ProfileInfo';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Dashboard/Orders/Orders';

const App = () => {
    return (
        <React.Fragment>
            <ToastContainer />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/shop/:type" element={<Shop />} />
                        <Route path="/shop/:type/:id" element={<ProductDetail />} />
                        <Route path="/shop/bag" element={<Bag />} />
                        <Route path="/shop/check-out" element={<CheckOut />} />
                    </Route>
                    <Route path="/profile" element={<Profile />}>
                        <Route path="/profile" element={<ProfileInfo />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Orders />} />
                    </Route>
                </Routes>
            </HashRouter>
        </React.Fragment>
    );
};

export default App;
