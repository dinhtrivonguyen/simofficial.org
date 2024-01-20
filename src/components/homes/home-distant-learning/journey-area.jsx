import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { course_data } from '../../../data';
import JourneyItem from '../../course/journey-item';
import useWindowSize from '../../../utils/useWindowSize';

const JourneyArea = () => {
    const { width } = useWindowSize();
    const isMobile = width < 768; // Adjust the breakpoint as needed
    const [shouldRenderCarousel, setShouldRenderCarousel] = useState(false);
    useEffect(() => {
        // Enable rendering of Carousel only on the client side
        setShouldRenderCarousel(true);
    }, []);

    if (!shouldRenderCarousel || !isMobile) {
        // Render non-carousel view for larger screens
        return (
            <div className="edu-course-area course-area-2 journey-area">
                <div className="container">
                    <div
                        className="section-title section-center"
                        data-sal-delay="100"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        <h2 className="section-title section-left">
                            Follow our journeys ✨
                        </h2>
                    </div>
                    <div className="row g-5">
                        {course_data.slice(2, 4).map((course, index) => (
                            <div
                                className="col-md-6"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                                key={course.id}
                            >
                                <JourneyItem
                                    data={course}
                                    image_location_path="02"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const settings = {
        showArrows: false,
        showStatus: false,
        showIndicators: false,
        infiniteLoop: false,
        selectedItem: 0,
        interval: 5000,
        transitionTime: 500,
        stopOnHover: false,
        centerMode: true,
        centerSlidePercentage: 70,
    };

    return (
        <div className="edu-course-area course-area-2 journey-area">
            <div className="container">
                <div
                    className="section-title section-center"
                    data-sal-delay="100"
                    data-sal="slide-up"
                    data-sal-duration="800"
                >
                    <h2 className="section-title section-left">
                        Follow our journeys ✨
                    </h2>
                </div>
                <div className="row g-5">
                    <Carousel
                        {...settings}
                        data-sal-delay="150"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        {course_data.map((course, index) => (
                            <div className="col-md-6" key={course.id}>
                                <JourneyItem
                                    data={course}
                                    image_location_path="02"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default JourneyArea;
