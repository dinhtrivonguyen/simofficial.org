import React from 'react';
import InspirationCard from '../inspiration-card';
import CourseTypeTen from '../course/course-type-ten';
import CourseTypeEleven from '../course/course-type-eleven';
import CourseTypeTwelve from '../course/course-type-twelve';

const PodcastItems = () => {
    return (
        <div className='Card-grid' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
            paddingLeft: '20px',
            paddingTop: '20px',
        }}>
            <div style={{ display: 'flex', gap: '24px', width: '100%',justifyContent:'center' }}>
                <InspirationCard />
                <div style={{
                    width: '688px',
                    height: '650px',
                    flexShrink: 0,
                    borderRadius: '16px',
                    background: '#FFDCED',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',  
                }}>
                    <CourseTypeTen />
                </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', width: '100%',justifyContent:'center' }}>
                <div style={{
                    width: '688px',
                    height: '650px',
                    flexShrink: 0,
                    borderRadius: '16px',
                    background: '#FFDCED',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',  
                }}>
                    <CourseTypeEleven />
                </div>
                <div style={{
                    width: '688px',
                    height: '650px',
                    flexShrink: 0,
                    borderRadius: '16px',
                    background: '#F0FFCA',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end', 
                    marginBottom: '50px', 
                }}>
                    <CourseTypeTwelve />
                </div>
            </div>
        </div>
    );
};

export default PodcastItems;
