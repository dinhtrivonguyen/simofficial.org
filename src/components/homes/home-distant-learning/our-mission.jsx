import React from 'react';
import { LocalLibrary, School } from "../../../svg";

const counter_data = [
    {
        icon: <LocalLibrary />,
        color: 'bs-black',
        delay: '50',
        text: 'Empowerment',
    },
    {
        icon: <School />,
        color: 'bs-black',
        delay: '100',
        text: 'Education',
    },
    {
        icon: <LocalLibrary />,
        color: 'bs-black',
        delay: '150',
        text: 'Support',
    },
]

const MissionArea = ({ home_3 = false, home_8 = false }) => {
    return (
        <div className='edu-brand-area brand-area-2 bg-image--1' style={{
            backgroundImage: 'url(/assets/images/bg/bg-image-41.png)',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: '1',
            backgroundPosition: 'center'
        }}>
            <div className={`${home_3 ? 'counterup-area-1 gap-lg-bottom-equal' : home_8 ? 'counterup-area-3 gap-bottom-equal' : 'counterup-area-5 edu-section-gap'}`}>
                <div className="container">
                    <div className="row g-5 section-title section-center">
                        <div className="icon-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <img src="/assets/images/icons/SIM icons-02.png" alt="Shape" style={{ width: '50px', height: '50px' }} />
                        </div>

                        <h2 className="title" style={{ color: '#072B60', fontWeight: '700', marginBottom: '10px' }}>Our mission</h2>
                        <p>We inspire and empower young females to building a brighter future and restoring hope</p>
                        {counter_data.slice(0, 3).map((c, i) => (
                            <div key={i} className="col-lg-4 col-md-6" data-sal-delay={c.delay} data-sal="slide-up" data-sal-duration="800">
                                <div className={`edu-counterup counterup-style-${home_3 ? '1' : '5'} ${!home_3 && c.color}`}>
                                    <div className="icon">
                                        {c.icon}
                                    </div>
                                    <h6 className="title" style={{ textTransform: 'none', color: '#072B60', fontWeight: '700', fontSize: '18px', marginBottom: '10px' }}>{c.text}</h6>
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