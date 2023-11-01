import React from 'react';
import InspirationCard from '../inspiration-card';
import CourseTypeTen from '../course/course-type-ten';

const PodcastItems = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
            paddingLeft: '220px',
            paddingTop: '20px',
        }}>
            <div style={{ display: 'flex', gap: '24px', width: '100%' }}>
                <InspirationCard />
                <div style={{
                    width: '800px',
                    height: '800px',
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
            <div style={{ display: 'flex', gap: '24px', width: '100%' }}>
                <div style={{
                    width: '800px',
                    height: '800px',
                    flexShrink: 0,
                    borderRadius: '16px',
                    background: '#FFDCED',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',  
                }}>
                    <CourseTypeTen />
                </div>
                <div style={{
                    width: '800px',
                    height: '800px',
                    flexShrink: 0,
                    borderRadius: '16px',
                    background: '#F0FFCA',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end', 
                    marginBottom: '50px', 
                }}>
                    <CourseTypeTen />
                </div>
            </div>
        </div>
    );
};

export default PodcastItems;
