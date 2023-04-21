import { Pagination } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './orders.scss';
import useStatus from '../../../hooks/useStatus';
import useFormatTime from '../../../hooks/useFormatTime';
import OrderDetailModal from '../OrderDetail/OrderDetailModal';

const Orders = () => {
    const [data, setData] = useState([]);

    const [page, setPage] = useState();

    const [currenPage, setCurrenPage] = useState(1);

    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    const [orderSelect, setOrderSelect] = useState();
    const [getHour, getDate] = useFormatTime();

    const [getStatus] = useStatus();

    const handleChangePage = (even, value) => {
        setCurrenPage(value);
    };

    const handleOpen = () => {
        setIsOpenEditModal(!isOpenEditModal);
    };

    const handleOpenEditModal = (order) => {
        setOrderSelect(order.id);
        handleOpen();
    };

    useEffect(() => {
        const getDataTable = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/orders?_page=${currenPage}&_limit=${5}}`);
            setData(res.data.data);
        };
        getDataTable();

        const getPageLength = async () => {
            const res = await axios(`${process.env.REACT_APP_BACKEND_API}/orders`);
            if (res.data && res.data.data.length > 0) {
                setPage(Math.ceil(res.data.data.length / 5));
            }
        };

        getPageLength();
    }, [currenPage]);
    return (
        <div className="table">
            {isOpenEditModal && (
                <OrderDetailModal isopen={isOpenEditModal} handleOpen={handleOpen} orderId={orderSelect} />
            )}
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
                                    <button
                                        onClick={() => handleOpenEditModal(item)}
                                        className="table-button table-button-view"
                                    >
                                        View
                                    </button>
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
