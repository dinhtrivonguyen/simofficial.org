import React from 'react';

const CourseTypeEleven = ({ data, classes }) => {
    return (
        <div className={`edu-course course-style-3 ${classes ? classes : ''}`} style={{marginTop: 'auto'}}>
            <div className="inner">
                <div className="thumbnail">
                    <img
                        src={`/assets/images/banner/Rectangle 582 (2).png`}
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
                    <span className="course-level">Episode 2</span>
                    <h5 className="title" style={{
                        color: '#D30060',
                        fontWeight:'bold',
                        fontSize:'27px',
                    }}>
                        Create Your Buzz? Think Beyond Your Next Role 
                    </h5>
                    <h2>Janice Kosanovich</h2>
                    <div className="description">
                        <p>Vice President of PepsiCo</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CourseTypeEleven;
