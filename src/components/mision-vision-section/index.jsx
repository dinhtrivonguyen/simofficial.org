import React from 'react';
import MissionVisionItem from '../mission-vision-item';

function MissionVisionContainer() {
    return (
        <div className="about-mission">
            <MissionVisionItem
                color="02"
                icon="51"
                title="Our Mission"
                text="She Inspires Me inspire and empower young females to build a brighter future and restore hope."
                imgSrc="/assets/images/icons/SIM icons-02.png"
                type="mission"
            />
            <MissionVisionItem
                color="06"
                icon="52"
                title="Our Vision"
                text="We envision a world where girls are valued, respected, and have equal opportunities to pursue education, goals, and dreams."
                imgSrc="/assets/images/icons/SIM icons-02.png"
                type="vision"
            />
        </div>
    );
}

export default MissionVisionContainer;
