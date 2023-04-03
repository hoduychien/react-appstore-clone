import React, { useLayoutEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <React.Fragment>
            <Header />
            <div className="layout">
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
