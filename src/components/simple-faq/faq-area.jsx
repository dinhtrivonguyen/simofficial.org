import React from 'react';
import SingleFaq from './single-faq';

const FaqArea = () => {
    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title section-center" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                            <h2 className="title">Q&A about funding ✨</h2>
                        </div>
                        <div className="faq-page-tab-content" id="faq-accordion">
                            <div className="tab-pane fade show active" id="gn-ques" role="tabpanel">
                                <div className="faq-accordion">
                                    <div className="accordion">
                                        <SingleFaq show={true} id="1" title="What are our funding goals?" desc="We aim to raise $20,000 each project our first funding round, from September to February 2024, second funding round from February to December 2024." />
                                        <SingleFaq id="2" title="What we will do after receive the money?" desc="90% of fundraising money will distribute and we keep 10% of operation cost (running and maintaining website, HR, paying ads, and other miscellaneous fees.)" />
                                        <SingleFaq id="3" title="How will we distribute funding to our projects?" desc="Each project we will list its own fundraising goal. You can double check here in Our project." />
                                        <SingleFaq id="4" title="How will we transfer to money to Vietnam?" desc="We will transfer money to anh Phuoc, the director and CEO of JUNKO Da Nang, Vietnam. He and more than 45+ authentic volunteers will be responsible for organizing and turning SIM projects to real life! Besides, two of our SIM members are also in charged of logistics and supply chain part in our projects." />
                                        <SingleFaq id="5" title="Do you still have more questions?" desc="Feel free to reach out here  👉 admin@simofficial.org" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqArea;
