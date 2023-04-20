import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './profile.scss';
import searchIcon from '../../assets/images/search-icon.svg';
import bagIcon from '../../assets/images/box-small-icon.svg';
import boxIcon from '../../assets/images/box-small-icon.svg';
import userIcon from '../../assets/images/setting-small-icon.svg';

const Profile = () => {
    return (
        <div>
            <Header></Header>
            <div className="profile">
                <div className="profile-sidebar">
                    <div className="profile-sidebar-title">
                        <h1>My Profile</h1>
                    </div>
                    <div className="profile-sidebar-search">
                        <img src={searchIcon} alt="" />
                        <input type="text" placeholder="Search" />
                    </div>

                    <div className="profile-sidebar-menu">
                        <div className="profile-sidebar-menu-item">
                            <img
                                className="profile-sidebar-avatar"
                                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/96239825_1358829270974877_8318696841638051840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=koFsNvrzAWcAX9h5U4E&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBrgLR9inYQAIVyJUeVOcq60n0u6GqfWQvvGWb0CN4ErQ&oe=645CFA61"
                                alt=""
                            />
                            <div className="profile-sidebar-menu-item-text">
                                <Link to="/profile">Ho Duy Chien</Link>
                                <span>ID Apple, iClound & Apple Store</span>
                            </div>
                        </div>
                        <div className="profile-sidebar-menu-item">
                            <img src={bagIcon} alt="" />
                            <Link to="/profile/bag">My bag</Link>
                        </div>

                        <div className="profile-sidebar-menu-item">
                            <img src={boxIcon} alt="" />

                            <Link to="/profile/order">My order</Link>
                        </div>
                        <div className="profile-sidebar-menu-item">
                            <img src={userIcon} alt="" />

                            <Link to="/profile/order">Sign out</Link>
                        </div>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
