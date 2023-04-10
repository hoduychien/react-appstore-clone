import './hero.scss';
import { Link } from 'react-router-dom';

import messageApple from '../../assets/images/apple-message.svg';
const Hero = (state) => {
    return (
        <div>
            <div className="hero">
                <div className="title">
                    <h1>Shop {state.title}</h1>
                </div>
                <div className="hero-right">
                    <div className="hero-right-item">
                        <img
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202211?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1671245980023"
                            alt=""
                        />
                        <div>
                            <h3>Need shopping help?</h3>
                            <Link to="/">Ask a Specialist</Link>
                        </div>
                    </div>
                    <div className="hero-right-item">
                        <img src={messageApple} alt="" />
                        <div>
                            <h3>Need shopping help?</h3>
                            <Link to="/">Find one near you</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
