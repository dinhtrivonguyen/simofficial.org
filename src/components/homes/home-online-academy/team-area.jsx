import React from 'react';
import { instructors_data } from '../../../data';
import TeamTwo from '../../team-member/team-two';

const instructors = instructors_data.slice(0, 4);
const dreamTextStyle = {
    color: '#072B60',
    textAlign: 'center',
    fontSize: '66.084px',
    fontWeight: 700,
    lineHeight: '50.839px',
    letterSpacing: '-0.727px',
    display: 'inline',
    verticalAlign: 'middle',
};

const TeamArea = ({ about_p }) => {
    return (
        <>
            <style>
                {`
            @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            `}
            </style>
            <div
                className={`edu-team-area ${
                    about_p
                        ? 'team-area-5 section-gap-large'
                        : 'team-area-2 edu-section-gap'
                }`}
                style={{
                    backgroundColor: '#FFDCED',
                    position: 'relative',
                    zIndex: '1',
                }}
            >
                <div className="container">
                    <div
                        className="section-title section-center"
                        data-sal-delay="150"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        <div
                            className="icon-container"
                            style={{
                                textAlign: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <img
                                src="/assets/images/icons/SIM icons-02.png"
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
                            Our team
                        </h2>
                        <p
                            style={{
                                color: '#1E1E1E',
                                textAlign: 'center',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '32px',
                                letterSpacing: '-0.264px',
                            }}
                        >
                            Together, we can make the world a better place for
                            children in need. We are young, motivated, and
                            ethical professionals with 78+ current volunteers.
                        </p>
                    </div>
                    <div className="row g-5">
                        {instructors.map((instructor) => (
                            <div
                                key={instructor.id}
                                className="col-lg-3 col-md-6 col-sm-6"
                                data-sal-delay="100"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <TeamTwo instructor={instructor} />
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '60px',
                        }}
                    >
                        <button>Learn more about us</button>
                    </div>
                    <div
                        style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            marginTop: '60px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                animation: 'marquee 10s linear infinite',
                            }}
                        >
                            {Array(3)
                                .fill(null)
                                .map((_, index) => (
                                    <span
                                        key={index}
                                        style={{ marginRight: '40px' }}
                                    >
                                        <img
                                            src="/assets/images/icons/SIM icons-14.png"
                                            alt="Icon"
                                            style={{
                                                verticalAlign: 'middle',
                                                marginRight: '10px',
                                            }}
                                        />
                                        <span style={dreamTextStyle}>
                                            Dare to lead
                                        </span>
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamArea;
