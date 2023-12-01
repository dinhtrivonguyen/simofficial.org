import React from 'react';

const CourseTypeTwelve = ({ data, classes }) => {
    return (
        <div className={`edu-course course-style-3 ${classes ? classes : ''}`} style={{marginTop: 'auto'}}>
            <div className="inner">
                <div className="thumbnail">
                    <img
                        src={`/assets/images/banner/Rectangle 582(3).png`}
                        alt="Course Meta"
                        style={{
                            width: '397px',
                            height: '291px',
                            objectFit: 'cover',
                            borderRadius: '12px 12px 0px 0px'
                        }}
                    />
                </div>

                <div className="content" style={{
                    width:'437px'
                }}>
                    <span className="course-level">Episode 5</span>
                    <h5 className="title" style={{
                        color: '#D30060',
                        fontWeight:'bold',
                        fontSize:'27px',
                    }}>
                        110% Talent and Passion 
                    </h5>
                    <h2>Sharon Lee</h2>
                    <div className="description">
                        <p>Project Manager at Microsoft</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CourseTypeTwelve;
