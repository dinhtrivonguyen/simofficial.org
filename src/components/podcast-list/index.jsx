import React from 'react';
import CourseTypeTen from '../course/course-type-ten';
import CourseTypeEleven from '../course/course-type-eleven';
import CourseTypeTwelve from '../course/course-type-twelve';
import CourseTypeThirteen from '../course/course-type-thirteen';
import CourseTypeFourteen from '../course/course-type-fourteen';
import CourseTypeFifteen from '../course/course-type-fifteen';
import CourseTypeSixteen from '../course/course-type-sixteen';
import CourseTypeSeventeen from '../course/course-type-seventeen';

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
                        background: '#CCE6FF',
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
                        background: '#FFDCED',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginBottom: '50px',
                    }}>
                        <CourseTypeThirteen />
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
                        <CourseTypeTwelve />
                    </div>
                    <div style={{
                        width: '688px',
                        height: '650px',
                        flexShrink: 0,
                        borderRadius: '16px',
                        background: '#CCE6FF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginBottom: '50px',
                    }}>
                        <CourseTypeFourteen />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '24px', width: '100%',justifyContent:'center' }}>
                    <div style={{
                        width: '688px',
                        height: '650px',
                        flexShrink: 0,
                        borderRadius: '16px',
                        background: '#CCE6FF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>
                        <CourseTypeFifteen />
                    </div>
                    <div style={{
                        width: '688px',
                        height: '650px',
                        flexShrink: 0,
                        borderRadius: '16px',
                        background: '#FFDCED',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginBottom: '50px',
                    }}>
                        <CourseTypeSixteen />
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
                        <CourseTypeSeventeen />
                    </div>
                    <div style={{
                        width: '688px',
                        height: '650px',
                        flexShrink: 0,
                        borderRadius: '16px',
                        background: '#CCE6FF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginBottom: '50px',
                    }}>
                        <CourseTypeEleven />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PodcastList;
