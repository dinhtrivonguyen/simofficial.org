import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import { motion } from 'framer-motion';

const AboutAreaNine = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#FFF',
        }}>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div
                                className="section-title section-left"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <h2 className="title">
                                    <span className="color-textPrimary">
                                        How to become that girl who inspires
                                    </span>
                                </h2>
                                <p>
                                    Through topics like "I wish I knew earlier when I was 20," "Tips for work-life balance," and "More women leading," we aim to provide educational and skill development opportunities, empowering them to enhance their mindset and career goals.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
                                        color: '#D30060',
                                        textAlign: 'center',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '32px',
                                        letterSpacing: '-0.456px',
                                    }}
                                    onClick={() => {/* handle your click event here */ }}
                                >
                                    Become SIM guest speaker
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="row g-5" id="masonry-gallery">
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-1 mb--30" data-sal-delay="50" data-sal="slide-down" data-sal-duration="1000">
                                        <img src="/assets/images/about/about-13.webp" alt="About Images" />
                                    </div>

                                    <div className="thumbnail thumbnail-4" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                                        <img src="/assets/images/about/about-15.webp" alt="About Images" />
                                    </div>
                                </div>
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-2 mb--30" data-sal-delay="50" data-sal="slide-down" data-sal-duration="1000">
                                        <img src="/assets/images/about/about-14.webp" alt="About Images" />
                                    </div>
                                    <div className="thumbnail thumbnail-3" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                                        <img src="/assets/images/about/about-16.webp" alt="About Images" />
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/icons/SIM icons-14.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/icons/SIM icons-14.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/icons/SIM icons-14.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
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

export default AboutAreaNine;
