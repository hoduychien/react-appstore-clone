import { Pagination } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './orders.scss';
import useStatus from '../../../hooks/useStatus';
import useFormatTime from '../../../hooks/useFormatTime';

const Orders = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();
    const [currenPage, setCurrenPage] = useState(1);
    const [getHour, getDate] = useFormatTime();
    const [getStatus] = useStatus();

    const getPageLength = async () => {
        const res = await axios(`${process.env.REACT_APP_BACKEND_API}/orders`);
        console.log(res.data.data.length);
        if (res.data && res.data.data.length > 0) {
            setPage(Math.ceil(res.data.data.length / 5));
        }
    };
    getPageLength();

    const handleChangePage = (even, value) => {
        setCurrenPage(value);
    };

    useEffect(() => {
        const getDataTable = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/orders?_page=${currenPage}&_limit=${5}}`);
            setData(res.data.data);
        };
        getDataTable();
    }, [currenPage]);
    return (
        <div className="table">
            <div className="table-header">
                <div className="table-title">
                    <h3>Orders</h3>
                </div>
                <div className="table-search">
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Location</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {console.log(data)}
                {data.map((item) => {
                    return (
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>

                                <td>{item.address}</td>
                                <td>
                                    <p>{getHour(item.updatedAt)}</p>
                                    {getDate(item.updatedAt)}
                                </td>
                                <td>
                                    <p className="status status-pending">{getStatus(item.status)}</p>
                                </td>
                                <td>{item.total}</td>
                                <td>
                                    <button className="table-button table-button-view">View</button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <div className="table-pagination">
                <Pagination count={page} variant="outlined" shape="rounded" onChange={handleChangePage} />
            </div>
        </div>
    );
};

export default Orders;
