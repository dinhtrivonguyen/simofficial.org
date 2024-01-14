const AboutArea = () => {
    return (
        <div className="gap-bottom-equal edu-about-area sim-brand about-style-2">
            <div className="container edublink-animated-shape">
                <div className="our-story-content">
                    <div className="row g-5 align-items-center">
                        <div className="row g-5 section-title section-center">
                            <div className="icon-container">
                                <img
                                    src="/assets/images/icons/SIM icons-05.png"
                                    alt="Shape"
                                />
                            </div>

                            <h2 className="title">Our story</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image-gallery">
                                <img
                                    className="main-img-1"
                                    src="/assets/images/about/Group 1000007029.png"
                                    alt="About Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-content">
                                <div
                                    className="section-title section-left"
                                    data-sal-delay="150"
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                >
                                    <h2 className="title">
                                        From a seed of inspiration
                                    </h2>
                                    <p>
                                        Our founder, Christine Tam Truong was
                                        born and raised in Da Nang, Vietnam
                                        before coming to the U.S. to pursue her
                                        American dream. While working at Junko
                                        Da Nang, a Japanese non-profit that
                                        helps ethnic minority children of
                                        Vietnam, her heart was broken when she
                                        saw young girls being forced to drop out
                                        of school, get married, give birth and
                                        work from early mornings to late nights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container edublink-animated-shape">
                        <div className="row g-6 align-items-center">
                            <div className="col-lg-5 content-text">
                                <div className="about-content">
                                    <div
                                        className="section-title section-left"
                                        data-sal-delay="150"
                                        data-sal="slide-up"
                                        data-sal-duration="800"
                                    >
                                        <h2 className="title">
                                            To a place where girls’ dreams bloom
                                        </h2>
                                        <p>
                                            It was in that moment that the seeds
                                            of She Inspires Me were sown - a
                                            non-profit organization dedicated to
                                            empowering and inspiring ethnic
                                            minority girls to pursue higher
                                            education and break free from child
                                            labor, human trafficking, arranged
                                            child marriages, and poverty.
                                        </p>
                                        <button className="learn-more-btn">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 content-image">
                                <div className="about-image-gallery">
                                    <img
                                        className="main-img-1"
                                        src="/assets/images/about/Rectangle 1719.png"
                                        alt="About Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;
