import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaSix = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#FFF',
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
                                        How She Inspires Me provides solutions
                                    </span>
                                </h2>
                                <p>
                                    In collaboration with JUNKO Da Nang organization with more than 78+ volunteer, we have established funds to empower, support, and restore hope for ethnic minority children and women in Vietnam.
                                </p>
                                <button
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #D0D0D0',
                                        background: '#FFF',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                    onClick={() => {/* handle your click event here */ }}
                                >
                                    Learn More about
                                    <img src="/assets/images/icons/footage-junko-2 1.png" alt="Icon" style={{ width: '100px', height: '40px' }} />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 1792.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaSix;
