import Link from "next/link";
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AboutAreaSeventeen = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#FFDCED',
        }}>
            <div className="container edublink-animated-shape" >
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/banner/Group 1000007269.png"
                                alt="About Image"
                            />
                        </div>
                        <ul className="shape-group">
                            <motion.li className="shape-1 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                animate={{
                                    x: mouseReverse(30).x,
                                    y: mouseReverse(30).y
                                }}
                            >
                                <img src="/assets/images/faq/Vector.png" alt="Shape" />
                            </motion.li>
                        </ul>
                    </div>
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
                                        Hosted by Christine Truong
                                    </span>
                                </h2>
                                <p>
                                    Our podcast is hosted by Christine Truong, a Gen Z girl from Viet Nam finding her American dreams and being passionately inspired by different women across her life.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutAreaSeventeen;
