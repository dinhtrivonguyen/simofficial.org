import React from 'react';
import CategoryItem from '../category-items';

const handleButtonClick = (actionType) => {
    alert(`Button clicked for action type: ${actionType}`);
};

function CategoryContainer() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        paddingTop: '70px',
        paddingBottom: '70px'
    };
    return (
        <div className="about-mission" style={containerStyle}>
        <CategoryItem 
            color="02"
            icon="51"
            title="Girls’ Education"
            text=""
            imgSrc="/assets/images/icons/Frame 1000008732.png"
            type="mission"
            buttonText="Learn more"
            onButtonClick={() => handleButtonClick('join')}
        />
        <CategoryItem 
            color="06"
            icon="52"
            title="Girls' Health and Well-Being"
            text=""
            imgSrc="/assets/images/icons/Frame 1000008733.png"
            type="vision"
            buttonText="Learn more"
            onButtonClick={() => handleButtonClick('apply')}
        />
    </div>
    );
}

export default CategoryContainer;
