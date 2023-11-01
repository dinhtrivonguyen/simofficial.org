import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AdBannerThree = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image" style={{
            backgroundColor: '#FFDCED',
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
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '60px'
                                }}>
                                    Dare to dream. Dare to lead.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBannerThree;
