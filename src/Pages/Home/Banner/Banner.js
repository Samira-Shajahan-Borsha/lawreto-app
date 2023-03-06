import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../../utilities/Images/Banner1.jpg';
import Banner2 from '../../../utilities/Images/Banner2.jpg';
import Banner3 from '../../../utilities/Images/Banner3.jpg';

import './Banner.css';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100 img-fluid"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>You Deserve The Best Defence Lawyer</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100 img-fluid"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Ensuring Justice Is Our Motto</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100 img-fluid"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Presentation Of The International Law</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;