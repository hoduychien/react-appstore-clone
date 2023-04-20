import './sidebar.scss';
import { BiHomeAlt, BiChevronRight, BiBarChartAlt, BiMessageDetail } from 'react-icons/bi';
import { MdOutlineAttachMoney, MdOutlineFeed } from 'react-icons/md';
import { AiOutlineAppstoreAdd, AiOutlineUserAdd, AiOutlineMail } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div>
            <div className="d-sidebar">
                <div className="d-sidebar-logo">Apple Dashboard</div>
                <div className="d-sidebar-menu">
                    <div className="d-sidebar-menu-title">
                        <div className="d-sidebar-menu-title-text">
                            <span>Dashboard</span>
                        </div>

                        <BiChevronRight className="d-sidebar-menu-icon" />
                    </div>

                    <ul className="d-sidebar-menu-list">
                        <li className="d-sidebar-menu-item">
                            <BiHomeAlt className="d-sidebar-menu-icon" />
                            <span>Home</span>
                        </li>
                        <li className="d-sidebar-menu-item">
                            <BiBarChartAlt className="d-sidebar-menu-icon" />
                            <span>Analytics</span>
                        </li>
                    </ul>
                </div>
                <div className="d-sidebar-menu">
                    <div className="d-sidebar-menu-title">
                        <div className="d-sidebar-menu-title-text">
                            <span>Manage</span>
                        </div>

                        <BiChevronRight className="d-sidebar-menu-icon" />
                    </div>

                    <ul className="d-sidebar-menu-list">
                        <li className="d-sidebar-menu-item">
                            <AiOutlineAppstoreAdd className="d-sidebar-menu-icon" />
                            <span>Products</span>
                        </li>
                        <li className="d-sidebar-menu-item">
                            <AiOutlineUserAdd className="d-sidebar-menu-icon" />
                            <span>Customers</span>
                        </li>
                        <li className="d-sidebar-menu-item">
                            <MdOutlineAttachMoney className="d-sidebar-menu-icon" />
                            <span>Orders</span>
                        </li>
                    </ul>
                </div>

                <div className="d-sidebar-menu">
                    <div className="d-sidebar-menu-title">
                        <div className="d-sidebar-menu-title-text">
                            <span>Notifycations</span>
                        </div>

                        <BiChevronRight className="d-sidebar-menu-icon" />
                    </div>

                    <ul className="d-sidebar-menu-list">
                        <li className="d-sidebar-menu-item">
                            <AiOutlineMail className="d-sidebar-menu-icon" />
                            <span>Mail</span>
                        </li>
                        <li className="d-sidebar-menu-item">
                            <MdOutlineFeed className="d-sidebar-menu-icon" />
                            <span>FeedBack</span>
                        </li>
                        <li className="d-sidebar-menu-item">
                            <BiMessageDetail className="d-sidebar-menu-icon" />
                            <span>Messages</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
