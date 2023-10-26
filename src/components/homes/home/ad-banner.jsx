import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AdBanner = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image">
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title">Every dollar you contribute will help alleviate these issues among ethnic minorities in <span className="color-secondary">Vietnam.</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBanner;