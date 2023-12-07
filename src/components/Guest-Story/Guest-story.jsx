import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import GuestStory1 from './Guest-story-1';
import GuestStory2 from './Guest-Story-2';
import GuestStory3 from './Guest-story-3';

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

const GuestStory = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image" style={{
            
            backgroundColor: '#FFDCED',
            position: 'relative',
            zIndex: '1',
            
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'flex-start'
            }}>
                <div className="edu-cta-banner">
                    <div className="row justify-content-flex-start">
                        <div className="col-lg-7">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title" style={{
                                    color: '#072B60',
                                    textAlign: 'left',
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '60px',
                                    position: 'relative',
                                    transform: 'translate(-100px,-20px)'
                                }}>
                                    Guest speakers’ stories✨
                                </h2>
                                <div className='Guest-container' style={{
                                    transform: 'translate(-100px)',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: 'auto',
                                    justifyContent: 'space-between',
                                }}> 
                                    <GuestStory1/>
                                    <GuestStory2/>
                                    <GuestStory3/>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestStory;
