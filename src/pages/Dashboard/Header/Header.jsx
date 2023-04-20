import { MdSearch } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './header.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const useReducer = useSelector((state) => state.useReducer);
    return (
        <div>
            <div className="d-header">
                <div className="d-header">
                    <div className="d-header-search">
                        <input type="text" placeholder="Search for results..." />
                        <MdSearch className="d-header-search-icon" />
                    </div>

                    <div className="d-header-action">
                        <div className="d-header-action-item">
                            <FiUsers className="d-header-action-icon" />
                        </div>
                        <div className="d-header-action-item">
                            <RiNotification3Line className="d-header-action-icon" />
                        </div>
                        <div className="d-header-action-item">
                            <AiOutlineSetting className="d-header-action-icon" />
                        </div>

                        <Tippy content="Tooltip" visible={visible} onClickOutside={hide}>
                            <div className="d-header-action-user" onClick={visible ? hide : show}>
                                <span>{useReducer.userInfo.email}</span>
                                <img src={useReducer.userInfo.image} alt="image" />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
