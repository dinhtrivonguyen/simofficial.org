import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaFourteen = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#FFDCED',
        }}>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 5398.png"
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
                                            40%
                                        </span>
                                        <span>
                                            of ethnic minority children in developing areas leave primary school unable to read a simple story.
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
                                            58%
                                        </span>
                                        <span>
                                            of ethnic minority girls drop out from school in order to get marriages; many enter into child labors.
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
                                            74%
                                        </span>
                                        <span>
                                            remote areas of Vietnam lack essentials such as clean water, education, and internet access to learn more about children’s and women’s right
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

export default AboutAreaFourteen;
