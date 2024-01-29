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
            >
                <div className="container">
                    <div
                        className="section-title section-center"
                        data-sal-delay="150"
                        data-sal="slide-up"
                        data-sal-duration="800"
                    >
                        <div className="icon-container">
                            <svg
                                width="61"
                                height="62"
                                viewBox="0 0 61 62"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.5138 55.1038C43.6816 55.1038 54.3562 44.4292 54.3562 31.2614C54.3562 18.0936 43.6816 7.41895 30.5138 7.41895C17.346 7.41895 6.67139 18.0936 6.67139 31.2614C6.67139 44.4292 17.346 55.1038 30.5138 55.1038Z"
                                    fill="white"
                                />
                                <g filter="url(#filter0_d_1917_3380)">
                                    <path
                                        d="M30.2644 28.4268C32.8474 28.4268 34.9414 26.3561 34.9414 23.8018C34.9414 21.2474 32.8474 19.1768 30.2644 19.1768C27.6814 19.1768 25.5874 21.2474 25.5874 23.8018C25.5874 26.3561 27.6814 28.4268 30.2644 28.4268Z"
                                        fill="#ED207D"
                                    />
                                    <path
                                        d="M24.2156 32.7744C26.7986 32.7744 28.8925 30.7038 28.8925 28.1494C28.8925 25.5951 26.7986 23.5244 24.2156 23.5244C21.6325 23.5244 19.5386 25.5951 19.5386 28.1494C19.5386 30.7038 21.6325 32.7744 24.2156 32.7744Z"
                                        fill="#ED207D"
                                    />
                                    <path
                                        d="M26.5266 39.8057C29.1096 39.8057 31.2036 37.735 31.2036 35.1807C31.2036 32.6264 29.1096 30.5557 26.5266 30.5557C23.9436 30.5557 21.8496 32.6264 21.8496 35.1807C21.8496 37.735 23.9436 39.8057 26.5266 39.8057Z"
                                        fill="#ED207D"
                                    />
                                    <path
                                        d="M34.0027 39.8057C36.5857 39.8057 38.6796 37.735 38.6796 35.1807C38.6796 32.6264 36.5857 30.5557 34.0027 30.5557C31.4196 30.5557 29.3257 32.6264 29.3257 35.1807C29.3257 37.735 31.4196 39.8057 34.0027 39.8057Z"
                                        fill="#ED207D"
                                    />
                                    <path
                                        d="M36.3137 32.7744C38.8967 32.7744 40.9907 30.7038 40.9907 28.1494C40.9907 25.5951 38.8967 23.5244 36.3137 23.5244C33.7307 23.5244 31.6367 25.5951 31.6367 28.1494C31.6367 30.7038 33.7307 32.7744 36.3137 32.7744Z"
                                        fill="#ED207D"
                                    />
                                    <path
                                        d="M30.2334 34.0559C32.462 34.0559 34.2686 32.2694 34.2686 30.0655C34.2686 27.8617 32.462 26.0752 30.2334 26.0752C28.0049 26.0752 26.1982 27.8617 26.1982 30.0655C26.1982 32.2694 28.0049 34.0559 30.2334 34.0559Z"
                                        fill="#ED207D"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_1917_3380"
                                        x="19.5386"
                                        y="19.1768"
                                        width="23.4521"
                                        height="22.6289"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dx="2" dy="2" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_1917_3380"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1917_3380"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>

                        <h2 className="title">Our team</h2>
                        <p>
                            Together, we can make the world a better place for
                            children in need. We are young, motivated, and
                            ethical professionals with 78+ current volunteers.
                        </p>
                    </div>
                    <div className="row g-5">
                        {instructors.map((instructor) => (
                            <div
                                key={instructor.id}
                                className="col-lg-3 col-md-6 col-sm-6 pr-8 pl-8"
                                data-sal-delay="100"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <TeamTwo instructor={instructor} />
                            </div>
                        ))}
                    </div>
                    <div className="learn-more">
                        <button>Learn more about us</button>
                    </div>
                    <div className="scroll">
                        <div className="m-scroll">
                            {Array(4)
                                .fill(null)
                                .map((_, index) => (
                                    <span key={index}>
                                        Dare to lead{' '}
                                        <svg
                                            width="27"
                                            height="22"
                                            viewBox="0 0 27 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.6993 5.79011C13.8105 5.45655 14.282 5.46067 14.3912 5.79423C15.1859 8.2259 17.4035 13.5834 21.6656 14.2958H21.6821C22.0424 14.3576 22.1124 14.8435 21.7788 14.9897C19.8001 15.8668 17.0637 17.547 15.3198 20.6396C14.9368 21.319 14.6465 21.9882 14.4241 22.6245C14.3088 22.9539 13.8352 22.9436 13.7343 22.61C13.5408 21.9615 13.2731 21.2758 12.9046 20.5799C11.1915 17.3452 8.24919 15.6918 6.23549 14.8867C5.89782 14.7529 5.94929 14.2608 6.3055 14.1929C6.33844 14.1867 6.37344 14.1805 6.40639 14.1723C10.72 13.2684 12.9005 8.17649 13.6993 5.79011Z"
                                                fill="#072B60"
                                            />
                                            <path
                                                d="M12.2867 5.26081C12.3979 4.92726 12.8694 4.93137 12.9786 5.26493C13.7733 7.6966 15.9909 13.0541 20.253 13.7665H20.2695C20.6298 13.8283 20.6998 14.3142 20.3662 14.4604C18.3875 15.3375 15.6511 17.0177 13.9072 20.1103C13.5242 20.7898 13.2339 21.4589 13.0115 22.0952C12.8962 22.4246 12.4226 22.4143 12.3217 22.0807C12.1282 21.4322 11.8605 20.7465 11.492 20.0506C9.77889 16.8159 6.83659 15.1625 4.82289 14.3575C4.48522 14.2236 4.53669 13.7315 4.8929 13.6636C4.92584 13.6574 4.96085 13.6512 4.99379 13.643C9.30738 12.7391 11.4879 7.64719 12.2867 5.26081Z"
                                                fill="#ED207D"
                                            />
                                        </svg>
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
