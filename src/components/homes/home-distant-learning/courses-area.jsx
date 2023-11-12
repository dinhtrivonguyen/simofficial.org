import Link from 'next/link';
import { course_data } from '../../../data';
import CourseTypeNine from '../../course/course-type-nine';

const CoursesArea = () => {
    return (
        <div className="edu-course-area course-area-2 gap-tb-text">
            <div className="container">
                <div
                    className="section-title section-center"
                    data-sal-delay="100"
                    data-sal="slide-up"
                    data-sal-duration="800"
                >
                    <div
                        className="icon-container"
                        style={{ textAlign: 'center', marginBottom: '10px' }}
                    >
                        <img
                            src="/assets/images/icons/SIM icons-03.png"
                            alt="Shape"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </div>
                    <h2
                        className="title"
                        style={{
                            color: '#072B60',
                            fontWeight: '700',
                            marginBottom: '10px',
                        }}
                    >
                        Our projects
                    </h2>
                    <p
                        data-sal-delay="200"
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        className="description"
                    >
                        You can help put an end to child marriage, child labor,
                        human trafficking, and the water crisis for ethnic
                        minorities in mountainous areas of Vietnam by supporting
                        our projects.
                    </p>
                </div>
                <div className="row g-5 mb-5">
                    {course_data.slice(0, 4).map((course, index) => {
                        if (index < 2) {
                            return (
                                <div
                                    className="col-md-6"
                                    data-sal-delay="150"
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    key={course.id}
                                >
                                    <CourseTypeNine
                                        data={course}
                                        image_location_path="02"
                                    />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div className="row g-5 mb-5">
                    {course_data.slice(2, 4).map((course, index) => (
                        <div
                            className="col-md-6"
                            data-sal-delay="150"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            key={course.id}
                        >
                            <CourseTypeNine
                                data={course}
                                image_location_path="02"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesArea;
