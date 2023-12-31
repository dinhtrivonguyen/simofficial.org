import React from 'react';
import { Footer, Header } from '../../../layout';
import HeroAreaTwo from '../../homes/home-distant-learning/hero-area-2';
import AdBannerSix from '../../homes/home/ad-banner-6';
import CategoryContainer from '../../category-container';
import AboutAreaFive from '../../homes/home-distant-learning/about-area-5';
import AboutAreaSix from '../../homes/home-distant-learning/about-area-6';
import AboutAreaSeven from '../../homes/home-distant-learning/about-area-7';
import AboutAreaEight from '../../homes/home-distant-learning/about-area-8';
import AboutAreaNine from '../../homes/home-distant-learning/about-area-9';
import AdBannerSeven from '../../homes/home/ad-banner-7';
import AboutAreaTen from '../../homes/home-distant-learning/about-area-10';
import FaqArea from '../../simple-faq/faq-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <HeroAreaTwo />
                <AdBannerSix />
                <CategoryContainer />
                <AboutAreaFive />
                <AboutAreaSix />
                <AboutAreaSeven />
                <AboutAreaEight />
                <AboutAreaNine />
                <AdBannerSeven />
                <AboutAreaTen />
                <FaqArea/>
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;