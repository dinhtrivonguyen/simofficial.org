import React from 'react';

const CourseTypeThirteen = ({ data, classes }) => {
    return (
        <div className={`edu-course course-style-3 ${classes ? classes : ''}`} style={{marginTop: 'auto'}}>
            <div className="inner">
                <div className="thumbnail">
                    <img
                        src={`/assets/images/banner/Rectangle 582(4).png`}
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
                    <span className="course-level">Episode 8</span>
                    <h5 className="title" style={{
                        color: '#D30060',
                        fontWeight:'bold',
                        fontSize:'27px',
                    }}>
                        Resiliency is essential
                    </h5>
                    <h2>Ariel Chadwick</h2>
                    <div className="description">
                        <p>Sale Manager at Schneider Logistics Company</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CourseTypeThirteen;
