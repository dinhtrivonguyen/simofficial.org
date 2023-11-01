import React from 'react';
import { Footer, Header } from '../../../layout';
import PodcastItems from '../../podcast-card';
import AboutAreaSeventeen from '../../homes/home-distant-learning/about-area-17';
import PodcastList from '../../podcast-list';
import AdBannerThirthteen from '../../homes/home/ad-banner-13';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <PodcastItems />
                <AboutAreaSeventeen />
                <PodcastList />
                <AdBannerThirthteen/>
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;