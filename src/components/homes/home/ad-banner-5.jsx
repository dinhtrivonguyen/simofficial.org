import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const paragraphStyle = {
    overflow: 'hidden',
    color: '#2E2E2E',
    textAlign: 'center',
    width: '580px',
    height: '96px',
    flexShrink: 0,
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '-0.264px',
};

const AdBannerFive = () => {
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
                                    Be bold. Be inspired. Be you.
                                </h2>
                                <p style={paragraphStyle}>We empower future leaders with compassion, courage, determination, and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBannerFive;
