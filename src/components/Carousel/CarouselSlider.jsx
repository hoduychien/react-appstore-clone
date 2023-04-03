import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './config';

const CarouselSlider = ({ children }) => {
    return (
        <>
            <Carousel responsive={responsive}>{children}</Carousel>
        </>
    );
};

export default CarouselSlider;
