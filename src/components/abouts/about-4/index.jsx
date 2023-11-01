import React from 'react';
import { Footer, Header, HeaderTwo } from '../../../layout';
import AboutUsArea from './about-us-area';
import TestimonialArea from './testimonial-area';
import MissionVisionContainer from '../../mision-vision-section';
import AboutAreaThree from '../../homes/home-distant-learning/about-area-3';
import AdBannerAbout from '../../homes/home/ad-banner-2';
import AboutAreaFour from '../../homes/home-distant-learning/about-area-4';
import AdBannerThree from '../../homes/home/ad-banner-3';
import TeamAreaTwo from '../../homes/home-online-academy/team-area-2';
import AdBannerFour from '../../homes/home/ad-banner-4';
import CtaJoinContainer from '../../cta-join-us';
import AdBannerFive from '../../homes/home/ad-banner-5';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <AboutUsArea/>
                <MissionVisionContainer/>
                <AboutAreaThree/>
                <AdBannerAbout/>
                <AboutAreaFour/>
                <AdBannerThree/>
                <TeamAreaTwo/>
                <AdBannerFour/>
                <CtaJoinContainer/>
                <AdBannerFive/>
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;