import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaSixteen = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#FFF',
        }}>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 6033.png"
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
                                    We aim for supporting girls in mountainous areas who have outstanding studying performance to encourage them to pursue higher education and realize their potential.
                                </p>
                                <Link href="#">
                                    <a className="edu-btn btn-medium">Donate now &nbsp;
                                        <img src="/assets/images/icons/favorite.png"></img></a>
                                </Link>
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
                                        We help girls to remove major obstacles to go to school
                                    </span>
                                </h2>
                                <p>
                                    While partnering with JUNKO Da Nang organization(*), we commit to our mission by providing:
                                    Annual 320+ scholarship and 120+ financial aid is given every year for primary and secondary students who are at risk of dropping out from school.
                                    More than 1,200+ school supplies, books, tables, backpacks, bicycles are given for ethnic minority students and their families annually.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 17371.png"
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
                                src="/assets/images/about/Rectangle 17271.png"
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
                                    and continue pursuing their dreams.
                                    </span>
                                </h2>
                                <p>
                                SIM brings great practical value by not only sending school supplies and financial supports but also highlighting children’s rights to education, raising awareness about child marriage and the problem of illegal human trafficking to China. 
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

export default AboutAreaSixteen;
