import React from 'react';
import { Footer, Header } from '../../../layout';
import AdBannerTen from '../../homes/home/ad-banner-10';
import BlogArea from '../../homes/home-distant-learning/blog-area';
import HeroAreaFour from '../../homes/home-distant-learning/hero-area-4';
import AboutAreaFourteen from '../../homes/home-distant-learning/about-area-14';
import AdBannerEleven from '../../homes/home/ad-banner-11';
import AdBannerTwelve from '../../homes/home/ad-banner-12';
import AboutAreaFifteen from '../../homes/home-distant-learning/about-area-15';
import AboutAreaSixteen from '../../homes/home-distant-learning/about-area-16';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <HeroAreaFour />
                <AboutAreaFourteen />
                <AdBannerEleven />
                <AdBannerTwelve />
                <AboutAreaFifteen />
                <AdBannerTen />
                <AboutAreaSixteen />
                <BlogArea />
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;