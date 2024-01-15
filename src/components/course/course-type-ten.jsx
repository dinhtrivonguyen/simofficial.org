import React from 'react';

const CourseTypeTen = ({ data, classes }) => {
    return (
        <div className={`edu-course course-style-3 ${classes ? classes : ''}`} style={{marginTop: 'auto'}}>
            <div className="inner">
                <div className="thumbnail">
                    <img
                        src={`/assets/images/banner/Rectangle 582(1).png`}
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
                    width:'437px',
                    height: '290px'
                }}>
                    <span className="course-level">Episode 7</span>
                    <h5 className="title" style={{
                        color: '#D30060',
                        fontWeight:'bold',
                        fontSize:'27px',
                    }}>
                        How to lead a Crucial Converation? 
                    </h5>
                    <h2>Divana Chiu</h2>
                    <div className="description">
                        <p>Director of Digital Commerce at Ben E Keith</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CourseTypeTen;
