import React from 'react';
import Link from 'next/link';

const JourneyItem = ({ data, classes }) => {
    return (
        <div
            className={`edu-course course-style-3 ${
                classes ? classes : ''
            } journey-item`}
        >
            <div className="inner">
                <div className="thumbnail">
                    <Link href={`/course-details/${data.id}`}>
                        <img
                            src={`/assets/images/course/course-04/${data.img}`}
                            alt="Course Meta"
                        />
                    </Link>
                </div>

                <div className="content">
                    <span className="course-level">{data.level}</span>
                    <h5 className="title">
                        <Link href={`/course-details/${data.id}`}>
                            {data.title}
                        </Link>
                    </h5>

                    <div className="description">
                        <p>{data.short_desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default JourneyItem;
