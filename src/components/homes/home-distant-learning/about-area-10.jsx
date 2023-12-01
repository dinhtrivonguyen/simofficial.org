import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaTen = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area">
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
                                        We help girls who are suffering
                                    </span>
                                </h2>
                                <p>
                                    and experience abuse neglect or dysfunctional parenting at home suffer the dual trauma of being cut off from supportive teachers, education, and friends.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 5941.png"
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
                                        And encourage them to develop stronger self-esteem
                                    </span>
                                </h2>
                                <p>
                                    and avoid sexual harassment, human trafficking across borders, and child labor due to growing up in impoverished communities.
                                </p>
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
                                        Nurturing knowledge and raise awareness
                                    </span>
                                </h2>
                                <p>
                                    of their rights, and how to speak and write their own languages - limiting their chances of employment and education.
                                </p>
                                <Link href="#" className="edu-btn btn-medium">
                                    Donate now<img src="/assets/images/icons/favorite.png"></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 629.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaTen;
