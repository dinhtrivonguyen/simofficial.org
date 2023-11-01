import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaSeven = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#F0FFCA',
        }}>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 595.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div
                                className="section-title section-left"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <h2 className="title">
                                    <span className="color-textPrimary">
                                        Let Her Shine Fund
                                    </span>
                                </h2>
                                <p>
                                    Understanding the significant challenges that every girl and woman faces in menstrual hygiene and the emergence of social sexual crisis, we conduct 3 main projects : SIM Menstrual Education Workshops, SIM Supermarkets for Kids, and SIM family visits.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
                                        color: '#D30060',
                                        textAlign: 'center',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '32px',
                                        letterSpacing: '-0.456px',
                                    }}
                                    onClick={() => {/* handle your click event here */ }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div
                                className="section-title section-left"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <h2 className="title">
                                    <span className="color-textPrimary">
                                        AquaWear Project
                                    </span>
                                </h2>
                                <p>
                                    This project provides children clean, reliable water sources, clothing, and footwear to go to school annually.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
                                        color: '#D30060',
                                        textAlign: 'center',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '32px',
                                        letterSpacing: '-0.456px',
                                    }}
                                    onClick={() => {/* handle your click event here */ }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 1760.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 1761.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div
                                className="section-title section-left"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                <h2 className="title">
                                    <span className="color-textPrimary">
                                        She Inspires Me Scholarship
                                    </span>
                                </h2>
                                <p>
                                    We identify Vietnamese girls who are most at risk of dropping out, then provide primary and secondary school scholarships to help them realize their educational goals and encourage them to follow their dreams.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
                                        color: '#D30060',
                                        textAlign: 'center',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '32px',
                                        letterSpacing: '-0.456px',
                                    }}
                                    onClick={() => {/* handle your click event here */ }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaSeven;
