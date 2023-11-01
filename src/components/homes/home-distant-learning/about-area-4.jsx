import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaFour = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area">
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 563.png"
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
                                        Starting from a hopeful whisper
                                    </span>
                                </h2>
                                <p>
                                    "Sister, you inspire me." Thị Dí approached me with a beaming smile and handed me a delicate flower she had plucked from the farm, gently clasped my shirt and whispered. “I love going back to school”. Despite hours of trying to describe the importance of education for the girls' growth, we received shocking news: Dí would be getting married in the next two months at the age of 12. In many minority communities of Vietnam, it's still believed that girls should enter into arranged marriages after their first periods.
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
                                    Read Christine’s story
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
                                        To a commitment to help ethnic
                                        minority girls pursue their dreams
                                    </span>
                                </h2>
                                <p>
                                    I was dismayed, confused, and frustrated to witness and see many other cases like Dí's situation. How could I make them understand the significance of education when they themselves hadn't experienced it, and their meals barely sustained them?

                                    I couldn't forget Dí’s bright smile, reminiscent of sunshine, and the hunger for knowledge that become an endless motivation for me keep trying to create a greater impact and help these young girls pursue their dreams and attain the education they so desperately craved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 566.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaFour;
