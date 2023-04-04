import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './config';
import PropTypes from 'prop-types';

const CarouselSlider = ({ children }) => {
    return (
        <>
            <Carousel responsive={responsive}>{children}</Carousel>
        </>
    );
};

CarouselSlider.propTypes = { children: PropTypes.node.isRequired };

export default CarouselSlider;
