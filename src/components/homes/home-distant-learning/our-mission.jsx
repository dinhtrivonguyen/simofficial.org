import React from 'react';
import Counter from '../../common/counter';

const counter_data = [
    {
        color: 'primary-color',
        delay: '50',
        count: 14,
        text: 'Empowerment',
        title: 'Empowerment',
        decimal: 0
    },
    {
        color: 'secondary-color',
        delay: '100',
        count: 4700,
        text: 'Education',
        title: 'Education',
        decimal: 0
    },
    {
        color: 'extra02-color',
        delay: '150',
        count: 180,
        text: 'Support',
        title: 'Support'
    },
]

const MissionArea = ({ home_3 = false, home_8 = false }) => {
    return (
        <div className='edu-brand-area brand-area-2 bg-image--1' >
            <div className={`${home_3 ? 'counterup-area-1 gap-lg-bottom-equal' : home_8 ? 'counterup-area-3 gap-bottom-equal' : 'counterup-area-5 edu-section-gap'}`}>
                <div className="container">
                    <div className="row g-5 section-title section-center">
                        <div className="icon-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <img src="/assets/images/icons/SIM icons-02.png" alt="Shape" style={{ width: '50px', height: '50px' }} />
                        </div>
                        <h2 className="title">Our mission</h2>
                        <p>We inspire and empower young females  to building a brighter future and restoring hope</p>
                        {counter_data.slice(0, 3).map((c, i) => (
                            <div key={i} className="col-lg-4 col-md-6" data-sal-delay={c.delay} data-sal="slide-up" data-sal-duration="800">
                                <div className={`edu-counterup counterup-style-${home_3 ? '1' : '5'} ${!home_3 && c.color}`}>
                                    <h6 className="title">{c.title}</h6>
                                    <h3 className={`counter-item count-number ${home_3 && c.color}`}>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionArea;