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
        // <div style={containerStyle}>
        //     <div style={cardBackgroundStyle}></div>
        // </div>
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
                        <a
                            className="edu-btn btn-small btn-secondary"
                            onClick={() => handleAddToCart(data)}
                        >
                            {cartCourses.some((item) => item.id === data.id)
                                ? 'Donate now'
                                : 'Donate now'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
// const cardBackgroundStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     padding: '0px 10px',
//     borderRadius: '16px',
//     background: '#CCE6FF',
//     zIndex: -1,
// };

// const containerStyle = {
//     position: 'relative',
//     width: '640px',
//     height: '688px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
// };
export default CourseTypeNine;
