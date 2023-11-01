import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';
import Image from 'next/image';

const paragraphStyle = {
    overflow: 'hidden',
    color: '#FFF',
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

const AdBannerEight = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper" style={{
            position: 'relative',
            zIndex: '1',
            overflow: 'hidden'
        }}>
            <img
                src="/assets/images/about/Rectangle 1761.png"
                alt="Background Image"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <p style={paragraphStyle}>Girls lack knowledge about the existence of the world around them and are taken advantage of, facing sexual harassment, human trafficking across borders, and child labor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdBannerEight;
