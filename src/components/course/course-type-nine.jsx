import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { cart_course } from '../../redux/features/cart-slice';

const CourseTypeNine = ({ data, classes }) => {
    const { cartCourses } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // handle add to cart
    const handleAddToCart = (course) => {
        dispatch(
            cart_course({
                id: course.id,
                img: `/assets/images/course/course-06/${course.img}`,
                price: course.course_price,
                title: course.title,
            })
        );
    };

    return (
        <div className={`edu-course course-style-3 ${classes ? classes : ''}`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link href={`/course-details/${data.id}`}>
                        <img
                            src={`/assets/images/course/course-04/${data.img}`}
                            alt="Course Meta"
                            style={{
                                width: '397px',
                                height: '291px',
                                objectFit: 'cover',
                                borderRadius: '12px 12px 0px 0px',
                            }}
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
                    <div className="read-more-btn">
                        <button
                            className="edu-btn btn-small btn-secondary"
                            onClick={() => handleAddToCart(data)}
                        >
                            {cartCourses.some((item) => item.id === data.id)
                                ? 'Donate now'
                                : 'Donate now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTypeNine;
