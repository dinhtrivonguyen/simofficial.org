import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaEight = () => {
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
                                src="/assets/images/about/Podcast pic.png"
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
                                        She Inspires Me Podcast
                                    </span>
                                </h2>
                                <p>
                                She Inspires Me podcast series where women of diverse backgrounds have beaten the odds and share their inspirational success stories.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        marginTop: '20px',
                                        display: 'flex',
                                        color: '#D30060',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                    onClick={() => {/* handle your click event here */ }}
                                >
                                    Listen on
                                    <img src="/assets/images/icons/Group 1000007220.png" alt="Icon" style={{ width: '90px', height: '20px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaEight;
