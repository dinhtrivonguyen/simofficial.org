import React from 'react';
import CtaJoinItem from '../cta-join-item';

const handleButtonClick = (actionType) => {
    alert(`Button clicked for action type: ${actionType}`);
};

function CtaJoinContainer() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        paddingTop: '70px',
        paddingBottom: '70px'
    };
    return (
        <div className="about-mission" style={containerStyle}>
        <CtaJoinItem 
            color="02"
            icon="51"
            title="Official member"
            text="Be a part of our innovative and dynamic teams who inspire young females from all over the world!"
            imgSrc="/assets/images/icons/SIM icons-02.png"
            type="mission"
            buttonText="Join Us"
            onButtonClick={() => handleButtonClick('join')}
        />
        <CtaJoinItem 
            color="06"
            icon="52"
            title="SIM internship"
            text="Apply to learn, grow, and make an impact through creating a better world for women and children."
            imgSrc="/assets/images/icons/SIM icons-02.png"
            type="vision"
            buttonText="Apply Now"
            onButtonClick={() => handleButtonClick('apply')}
        />
    </div>
    );
}

export default CtaJoinContainer;
