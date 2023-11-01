import React from 'react';

const CourseTypeTen = ({ data, classes }) => {
    return (
        <div className={`edu-course course-style-3 ${classes ? classes : ''}`} style={{marginTop: 'auto'}}>
            <div className="inner">
                <div className="thumbnail">
                    <img
                        src={`/assets/images/banner/Rectangle 582.png`}
                        alt="Course Meta"
                        style={{
                            width: '397px',
                            height: '291px',
                            objectFit: 'cover',
                            borderRadius: '12px 12px 0px 0px'
                        }}
                    />
                </div>

                <div className="content">
                    <span className="course-level">Episode 7</span>
                    <h5 className="title">
                        The Power Of Crucial Conversation
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
