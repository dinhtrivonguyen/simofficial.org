import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaTwo = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area">
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 593.png"
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
                                <p>
                                    As a multi-ethnic country, Vietnam has 54 recognized ethnic
                                    groups, including 53 minorities, estimating 14.1 million
                                    people of the country's total population.
                                </p>
                                <ul>
                                    <p>
                                        <span
                                            style={{
                                                color: "#072B60",
                                                fontSize: "42px",
                                                fontWeight: 700,
                                                lineHeight: "36px",
                                                letterSpacing: "-0.798px",
                                                display: "flex",
                                                width: "86px",
                                                height: "49px",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            40%
                                        </span>{" "}
                                        of girls drop out from primary schools to get married at the
                                        age of 11-13.
                                    </p>{" "}
                                    <p>
                                        {" "}
                                        <span
                                            style={{
                                                color: "#072B60",
                                                fontSize: "42px",
                                                fontWeight: 700,
                                                lineHeight: "36px",
                                                letterSpacing: "-0.798px",
                                                display: "flex",
                                                width: "86px",
                                                height: "49px",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            68%
                                        </span>{" "}
                                        of children don’t have access to education and reliable
                                        water sources.
                                    </p>
                                    <p>
                                        {" "}
                                        <span
                                            style={{
                                                color: "#072B60",
                                                fontSize: "42px",
                                                fontWeight: 700,
                                                lineHeight: "36px",
                                                letterSpacing: "-0.798px",
                                                display: "flex",
                                                width: "86px",
                                                height: "49px",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            80%
                                        </span>{" "}
                                        have zero knowledge about menstrual hygiene and reproductive
                                        health.
                                    </p>
                                </ul>
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
                                        Bring education and water solutions for children
                                    </span>
                                </h2>
                                <p>
                                    Spending hours walking to clean water sources without footwear
                                    is one of many daily challenges for families and children in
                                    the mountainous areas of Vietnam. By supporting us, you can
                                    help lift this burden.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
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
                                src="/assets/images/about/Rectangle 594.png"
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
                                        Restore hopes and lift more than 400+ dreams a year
                                    </span>
                                </h2>
                                <p>
                                    Through She Inspires Me Scholarships and Let Her Shine funds, we aid 480+ students who are at risk at dropping out due to poverty.
                                </p>
                                <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                    <Link href="/course-style-1" className="edu-btn">
                                        Make an impact now!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaTwo;
