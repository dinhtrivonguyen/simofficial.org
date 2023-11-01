import React from 'react';
import { Footer, Header } from '../../../layout';
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
import HeroAreaThree from '../../homes/home-distant-learning/hero-area-3';
import AboutAreaEleven from '../../homes/home-distant-learning/about-area-11';
import AdBannerEight from '../../homes/home/ad-banner-8';
import AdBannerNine from '../../homes/home/ad-banner-9';
import AboutAreaTwelve from '../../homes/home-distant-learning/about-area-12';
import AdBannerTen from '../../homes/home/ad-banner-10';
import AboutAreaThirteen from '../../homes/home-distant-learning/about-area-13';
import BlogArea from '../../homes/home-distant-learning/blog-area';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <HeroAreaThree />
                <AboutAreaEleven />
                <AdBannerEight />
                <AdBannerNine />
                <AboutAreaTwelve />
                <AdBannerTen />
                <AboutAreaThirteen />
                <BlogArea />
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;