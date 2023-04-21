import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFormatTime from '../../../hooks/useFormatTime';
import useCurrency from '../../../hooks/useCurrency';
import useStatus from '../../../hooks/useStatus';

const OrderDetailModal = (props) => {
    const [orders, setOrders] = useState({});

    const [getHour, getDate] = useFormatTime();

    const [formatCurrency] = useCurrency();

    const [getStatus] = useStatus();

    useEffect(() => {
        const getOrders = async () => {
            const orders = await axios.get(`${process.env.REACT_APP_BACKEND_API}/orders/${props.orderId}`);
            setOrders(orders.data.data);
        };
        getOrders();
    }, []);

    return (
        <div>
            <Modal
                open={props.isopen}
                onClose={props.handleOpen}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className="modal">
                    <div className="modal-header">
                        <span>Order id: {orders.id}</span>
                        <IoCloseOutline onClick={props.handleOpen} className="modal-header-icon" />
                    </div>

                    <div className="modal-body">
                        <div className="modal-row">
                            <p>
                                Date:{' '}
                                <span>
                                    {getHour(orders.updatedAt)} {getDate(orders.updatedAt)}
                                </span>
                            </p>
                        </div>
                        <div className="modal-row">
                            <p>
                                Fullname:{' '}
                                <span>
                                    {orders.firstName} {orders.lastName}
                                </span>
                            </p>
                            <p>
                                Email: <span>{orders.email}</span>
                            </p>
                        </div>
                        <div className="modal-row">
                            <p>
                                Phone: <span>{orders.phone}</span>
                            </p>
                            <p>
                                Shipping address: <span>{orders.address}</span>
                            </p>
                        </div>
                        <div className="modal-row">
                            <p>
                                Status: <span className={getStatus(orders.status)}>{getStatus(orders.status)}</span>
                            </p>
                        </div>

                        <div className="modal-list">
                            {orders.products &&
                                orders.products.map((item) => {
                                    return (
                                        <div className="modal-list-item" key={item.id}>
                                            <img src={item.image} alt="" />
                                            <p>
                                                {item.product} {item.color} {item.type.name}
                                            </p>

                                            <p>{formatCurrency(item.type.price)}</p>
                                            <p>x{item.quantity}</p>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="modal-order-total">
                            <p>Total: {orders.total}</p>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button>Confirm</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

OrderDetailModal.propTypes = {
    isopen: PropTypes.bool,
    handleOpen: PropTypes.func,
    orderId: PropTypes.number,
};

export default OrderDetailModal;
