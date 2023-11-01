import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaThree = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundImage: 'url(/assets/images/bg/bg-image-40.png)',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: '1',
            backgroundPosition: 'center'
        }}>
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
                                        Our commitment to empower girls and young women
                                    </span>
                                </h2>
                                <p>
                                    As of 2023, we’re proud to announce the official registration of She Inspires Me as a recognized 501(c)(3) organization - verified as an educational non-profit foundation with a dedicated mission of supporting children and women. This milestone marks a new chapter in our mission to uplift, educate, and empower women from marginalized communities across Vietnam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 1734.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaThree;
