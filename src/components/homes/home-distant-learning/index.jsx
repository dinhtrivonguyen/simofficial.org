import React from 'react';
import { Footer, Header } from '../../../layout';
import BlogArea from './blog-area';
import AboutArea from './about-area';
import CounterArea from './counter-area';
import MissionArea from './our-mission';
import CoursesArea from './courses-area';
import JourneyArea from './journey-area';
import HeroArea from './hero-area';
import TeamArea from '../home-online-academy/team-area';
import AdBanner from '../home/ad-banner';
import AboutAreaTwo from './about-area-2';
import dynamic from 'next/dynamic';
import GoogleMap from '../../GoogleMap';

const VietnamMap = dynamic(() => import('../../VietnamMap'), { ssr: false });

const index = () => {
    return (
        <div className="sticky-header">
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <HeroArea />

                <CounterArea home_3={true} />
                {/* <VietnamMap /> */}
                <GoogleMap />
                <MissionArea home_3={true} />
                <AdBanner />
                <AboutAreaTwo />
                <CoursesArea />
                <AboutArea />
                <TeamArea />

                <JourneyArea />
                {/* <BrandArea/> */}
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    );
};

export default index;
