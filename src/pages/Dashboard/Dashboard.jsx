import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './DSidebar/Sidebar';
import './dashboard.scss';

const Dashboard = () => {
    const useReducer = useSelector((state) => state.useReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!useReducer.isLoggedIn && useReducer.userInfo.role !== 'admin') {
            navigate('/');
        }
    }, []);
    return (
        <div>
            {console.log(useReducer.userInfo.role)}
            <Header />
            <Sidebar />
            <div className="dashboard-layout">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
