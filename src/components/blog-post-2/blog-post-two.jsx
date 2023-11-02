import React from 'react';
import Link from 'next/link';

const BlogPostTwo = ({ param }) => {
    const categoryStyle = {
        padding: '7.12px 22.784px',
        gap: '7.12px',
        borderRadius: '50.552px',
        background: 'var(--Pink-4, #FFDCED)',

        // New styles for text
        color: '#000',
        textAlign: 'center',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '-0.304px'

    };
    return (
        <div className="edu-blog blog-style-1">
            <div className="inner">
                <div className="thumbnail">
                    <Link href={`/blog-details/${param.id}`}>
                        <a>
                            <img src={param.img} alt="Blog Images" />
                        </a>
                    </Link>
                </div>
                <div className="content position-top">
                    <div className="read-more-btn">
                        <Link href={`/blog-details/${param.id}`}>
                            <a className="btn-icon-round">
                                <i className="icon-4"></i>
                            </a>
                        </Link>
                    </div>
                    <div className="category-wrap">
                        <a href="#" className="blog-category" style={categoryStyle}>{param.category}</a>
                    </div>
                    <h5 className="title">
                        <Link href={`/blog-details/${param.id}`}>
                            <a>{param.title}</a>
                        </Link>
                    </h5>
                    <p>{param.sm_desc}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPostTwo;