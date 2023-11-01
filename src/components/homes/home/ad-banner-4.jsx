import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AdBannerFour = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image" style={{
            backgroundColor: '#FFF',
            position: 'relative',
            zIndex: '1',
        }}>
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title" style={{
                                    color: '#072B60',
                                    textAlign: 'center',
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '50px'
                                }}>
                                    What would be like interning at She Inspires Me?
                                </h2>
                                <div>
                                    <p style={{
                                        color: 'rgba(0, 0, 0, 0.80)',
                                        textAlign: 'center',
                                        fontSize: '17px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '32px',
                                        letterSpacing: '-0.264px',
                                    }}>
                                        “It’s amazing to work with talented people and be involved in meaningful projects that are able to help the world become a better place! She Inspires Me helps me to reach my full potential, improve my leadership skills, and exposed so many view points.”
                                    </p>
                                </div>
                                <div>
                                    <h3>Beth Vu</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBannerFour;
