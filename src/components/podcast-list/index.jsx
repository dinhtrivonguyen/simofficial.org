import React from 'react';
import CourseTypeTen from '../course/course-type-ten';

const PodcastList = () => {
    return (
        <div>
            <div className="row g-5 section-title section-center">
                <h2 className="title" style={{ color: '#072B60', fontWeight: '700', marginBottom: '20px', marginTop:'100px' }}>Our latest podcasts</h2>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
                paddingLeft: '20px',
                paddingTop: '20px',
            }}>

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
                        <CourseTypeTen />
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
                        <CourseTypeTen />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PodcastList;
