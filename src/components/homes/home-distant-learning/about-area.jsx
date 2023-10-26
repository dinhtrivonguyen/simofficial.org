import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area sim-brand about-style-2">
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/Group 1000007029.png" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(25).x,
                                        y: mouseDirection(25).y
                                    } }
                                >
                                    <img src="/assets/images/faq/SIM icons-34.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(25).x,
                                        y: mouseReverse(25).y
                                    } }
                                >
                                    <img src="/assets/images/faq/SIM icons-34.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title"><span className="color-secondary">From a seed of inspiration</span></h2>
                                <p>Our founder, Christine Tam Truong was born and raised in Da Nang, Vietnam before coming to the U.S to pursue her American dream. While working at Junko Association, a Japanese non-profit organization that helps ethnic minority children of Vietnam, her heart was broken when she saw young girls being forced to drop out of school, get married, give birth and work from early morning to late night.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                <div className="col-lg-5">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title"><span className="color-pinterest">From a seed of inspiration</span></h2>
                                <p> It was in that moment that the seeds of She Inspires Me were sown - a non-profit organization dedicated to empowering and inspiring young females in developing countries to pursue their education, personal growth, and professional aspirations. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/Rectangle 1719.png" alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutArea;