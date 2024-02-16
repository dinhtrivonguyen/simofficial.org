import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AboutUsArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div
            className="edu-section-gap edu-about-area"
            style={{
                backgroundColor: '#FFDCED',
            }}
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div
                                className="section-title section-left"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <span className="pre-title">About Us</span>
                                <h2
                                    className="title"
                                    style={{
                                        overflow: 'hidden',
                                        color: '#072B60',
                                        fontSize: '50px',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '60px',
                                    }}
                                >
                                    We’re young professionals who are passionate
                                    about making the world a better place
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="row g-5" id="masonry-gallery">
                                <div className="col-6 masonry-item">
                                    <div
                                        className="thumbnail thumbnail-1 mb--30"
                                        data-sal-delay="50"
                                        data-sal="slide-down"
                                        data-sal-duration="1000"
                                    >
                                        <img
                                            src="/assets/images/about/about-13.webp"
                                            alt="About Images"
                                        />
                                    </div>

                                    <div
                                        className="thumbnail thumbnail-4"
                                        data-sal-delay="50"
                                        data-sal="slide-up"
                                        data-sal-duration="1000"
                                    >
                                        <img
                                            src="/assets/images/about/about-15.webp"
                                            alt="About Images"
                                        />
                                    </div>
                                </div>
                                <div className="col-6 masonry-item">
                                    <div
                                        className="thumbnail thumbnail-2 mb--30"
                                        data-sal-delay="50"
                                        data-sal="slide-down"
                                        data-sal-duration="1000"
                                    >
                                        <img
                                            src="/assets/images/about/about-14.webp"
                                            alt="About Images"
                                        />
                                    </div>
                                    <div
                                        className="thumbnail thumbnail-3"
                                        data-sal-delay="50"
                                        data-sal="slide-up"
                                        data-sal-duration="1000"
                                    >
                                        <img
                                            src="/assets/images/about/about-16.webp"
                                            alt="About Images"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li
                                    className="shape-1 scene"
                                    data-sal-delay="500"
                                    data-sal="fade"
                                    data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y,
                                    }}
                                >
                                    <img
                                        src="/assets/images/icons/SIM icons-10.png"
                                        alt="Shape Images"
                                    />
                                </motion.li>
                                <motion.li
                                    className="shape-2 scene"
                                    data-sal-delay="500"
                                    data-sal="fade"
                                    data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y,
                                    }}
                                >
                                    <img
                                        src="/assets/images/icons/SIM icons-10.png"
                                        alt="Shape Images"
                                    />
                                </motion.li>
                                <motion.li
                                    className="shape-3 scene"
                                    data-sal-delay="500"
                                    data-sal="fade"
                                    data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y,
                                    }}
                                >
                                    <img
                                        src="/assets/images/icons/SIM icons-10.png"
                                        alt="Shape Images"
                                    />
                                </motion.li>
                                <motion.li
                                    className="shape-4 scene"
                                    data-sal-delay="500"
                                    data-sal="fade"
                                    data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y,
                                    }}
                                >
                                    <span></span>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsArea;
