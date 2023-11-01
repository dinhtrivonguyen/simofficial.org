import Link from "next/link";
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const HeroAreaThree = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="hero-banner hero-style-2 bg-image"style={{
            backgroundColor: '#FFDCED',
        }}>
            <div className="container">
                <div className="row row--45 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                                Girls' Health and Well-being
                            </p>
                            <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                                <span className="color-textPrimary">Supporting girls’ health and well-being with love and care</span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-gallery">
                            <div className="thumbnail thumbnail-1" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                                <img src="/assets/images/about/Group 1000007131.png" alt="Girl Image" />
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-3 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/faq/Vector.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-1 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/faq/SIM icons-34.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-1 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/faq/dark-shape-13.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseDirection(50).x,
                                        y: mouseDirection(50).y
                                    }}
                                >
                                    <img src="/assets/images/faq/SIM icons-34.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-3 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/faq/Vector.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-3 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/faq/dark-shape-09.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/cta/SIM icons-34.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAreaThree;