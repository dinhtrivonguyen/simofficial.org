import React from 'react';
import Counter from '../../common/counter';

const counter_data = [
    {
        color: 'primary-color',
        delay: '50',
        count: 14,
        text: '+ provinces',
        title: 'We’ve visited',
        decimal: 0
    },
    {
        color: 'primary-color',
        delay: '100',
        count: 14700,
        text: '+ students',
        title: 'We’ve helped',
        decimal: 0
    },
    {
        color: 'primary-color',
        delay: '150',
        count: 680,
        text: '+ families',
        title: 'We’ve supported'
    },
]

const CounterArea = ({ home_3 = false, home_8 = false }) => {
    return (
        <div className='edu-brand-area brand-area-2 bg-image--1' style={{
            backgroundImage: 'url(/assets/images/bg/bg-image-40.png)',
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

                        <h2 className="title" style={{ color: '#072B60', fontWeight: '700', marginBottom: '10px' }}>Our impact</h2>
                        {counter_data.slice(0, 3).map((c, i) => (
                            <div key={i} className="col-lg-4 col-md-6" data-sal-delay={c.delay} data-sal="slide-up" data-sal-duration="800">
                                <div className={`edu-counterup counterup-style-${home_3 ? '1' : '5'} ${!home_3 && c.color}`}>
                                    <h6 className="title" style={{ textTransform: 'none', color: '#072B60', fontWeight: '700', fontSize: '18px', marginBottom: '10px' }}>{c.title}</h6>
                                    <h3 className={`counter-item count-number ${home_3 && c.color}`}>
                                        <span className="odometer">
                                            <Counter number={parseFloat(c.count)} text={c.text} decimal={c.decimal} />
                                        </span>
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

export default CounterArea;