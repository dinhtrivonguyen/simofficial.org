import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaThirteen = () => {
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
                                src="/assets/images/about/Rectangle 603.png"
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
                                    Understanding the significant challenges that every girl faces, we have established the Let Her Shine fund. Through this initiative, our volunteers visit every family with a girl who has dropped out of school.

                                    Let Her Shine Fund sponsors 3 main activities: SIM Family Visits, SIM Menstrual Hygiene, and SIM Supermarket for Kids.
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
                                        She Inspires Me Family Visits
                                    </span>
                                </h2>
                                <p>
                                    Our volunteer visits a family that has girls at risk of dropping out of school, persuades their family to let them return to school, and provides financial support. Going to school is the only way to help girls break the poverty circle and increase their employment opportunity.
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
                                src="/assets/images/about/Rectangle 1771.png"
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
                                src="/assets/images/about/Rectangle 574.png"
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
                                        She Inspires Me Menstrual Workshops
                                    </span>
                                </h2>
                                <p>
                                    Through SIM Workshops, we teach girls, boys, and women about menstrual hygiene, safe sex, how to avoid child marriage, human trafficking, and the power of education. Schools lack supplies and sanitation facilities girls need for managing their periods.
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
                                        She Inspires Me Supermarkets for Kids
                                    </span>
                                </h2>
                                <p>
                                    The experience of visiting a supermarket is an extraordinary event—a moment of sheer delight that an ethnic minority child cherishes throughout their lives. SIM Supermarkets allow children to learn how to use money and show where education can lead them.
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
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 1772.png"
                                alt="About Image"
                            />
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
                                    A long-running campaign that provides reliable, clean, and sustainable water sources, as well as footwear for children in need.
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
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 17721.png"
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
                                src="/assets/images/about/Rectangle 5374.png"
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
                                        SIM Menstrual Workshops
                                    </span>
                                </h2>
                                <p>
                                    Everyday, 160+ girls in A Lu Commune, Bat Xat District, Lao Cai Province have to walk to school without proper shoes or jackets despite severe weather in the north mountainous area of Vietnam. It usually takes them anywhere from one to three hours a day to navigate slippery roads and severe weather.
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

export default AboutAreaThirteen;
