import Link from 'next/link';
import React from 'react';

const TeamTwo = ({ instructor, image_location_path='02' }) => {
    return (
        <div className="edu-team-grid team-style-2">
            <div className="inner">
                <div className="thumbnail-wrap">
                    <div className="thumbnail">
                        <Link href={`/team-details/${instructor.id}`}>
                            <a>
                                <img src={`/assets/images/team/team-${image_location_path}/${instructor.img}`} alt="team images" />
                            </a>
                        </Link>
                    </div>
                    <ul className="team-share-info">
                        {instructor.social_links.map((social, i) => (
                            <li key={i}>
                                <a href={social.link} target={social.target ? social.target : ''}>
                                    <i className={social.icon}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    <h5 className="title" style={{
                        color: '#D30060',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '24px',
                        letterSpacing: '-0.264px'
                    }}>
                        <Link href={`/team-details/${instructor.id}`}>
                            <a>{instructor.name}</a>
                        </Link>
                    </h5>
                    <span className="designation" style={{
                        color: 'rgba(0, 0, 0, 0.80)',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24.461px',
                        letterSpacing: '-0.176px'
                    }}>
                        {instructor.title}
                    </span>
                    <p style={{
                        color: 'rgba(0, 0, 0, 0.80)',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24.461px',
                        letterSpacing: '-0.176px'
                    }}>
                        {instructor.sm_text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TeamTwo;
