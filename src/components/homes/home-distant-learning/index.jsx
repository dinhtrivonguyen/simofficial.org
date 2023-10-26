import React from 'react';
import { Footer, Header } from '../../../layout';
import BlogArea from './blog-area';
import AboutArea from './about-area';
import BrandArea from './brand-area';
import CategoryArea from './category-area';
import CounterArea from './counter-area';
import MissionArea from './our-mission';
import CoursesArea from './courses-area';
// import BlogArea from '../home-yoga-instructor/courses-area';
import FaqArea from './faq-area';
import HeroArea from './hero-area';
import TeamArea from '../home-online-academy/team-area';
import ContactMap from '../../contact-us/contact-map';
import AdBanner from '../home/ad-banner';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true}/>
                <HeroArea />
                <CounterArea home_3={true} />
                <ContactMap />
                <MissionArea home_3={true} />
                <AdBanner />
                <CoursesArea />
                <AboutArea />
                <TeamArea />
                <CategoryArea />
                <BlogArea/>
                {/* <BrandArea/> */}
                <Footer style_1={'bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;