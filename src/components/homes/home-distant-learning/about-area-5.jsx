import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaFive = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#E4F2FF',
        }}>
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
                                <h3 style={{
                                    color: "#072B60",
                                    fontSize: "35px",
                                    fontWeight: 700,
                                    paddingLeft: "20px",
                                }}>Do you know?</h3>
                                <ul>
                                    <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                                        <span style={{
                                            color: "#072B60",
                                            fontSize: "42px",
                                            fontWeight: 700,
                                            lineHeight: "36px",
                                            letterSpacing: "-0.798px",
                                            display: "flex",
                                            width: "86px",
                                            height: "49px",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginRight: '20px',
                                        }}>
                                            38%
                                        </span>
                                        <span>
                                            girls drop out from primary schools to get married and start working.
                                        </span>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                                        <span style={{
                                            color: "#072B60",
                                            fontSize: "42px",
                                            fontWeight: 700,
                                            lineHeight: "36px",
                                            letterSpacing: "-0.798px",
                                            display: "flex",
                                            width: "86px",
                                            height: "49px",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginRight: '20px',
                                        }}>
                                            47%
                                        </span>
                                        <span>
                                            don’t have accessibility to education, electricity, and reliable water sources.
                                        </span>
                                    </li>
                                    <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                                        <span style={{
                                            color: "#072B60",
                                            fontSize: "42px",
                                            fontWeight: 700,
                                            lineHeight: "36px",
                                            letterSpacing: "-0.798px",
                                            display: "flex",
                                            width: "86px",
                                            height: "49px",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginRight: '20px',
                                        }}>
                                            82%
                                        </span>
                                        <span>
                                            don’t understand the importance of menstrual hygiene and experience discomfort during periods and pregnancy.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaFive;
