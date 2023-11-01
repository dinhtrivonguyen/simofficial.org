import React from 'react';

function MissionVisionItem({ color, icon, title, text, imgSrc, type }) {
    const cardStyle = {
        width: '640px',
        height: '399px',
        flexShrink: 0,
        borderRadius: '12px',
        background: type === 'mission' ? '#E2FFA4' : '#FFFCB6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px 40px'
    };

    const titleStyle = {
        color: '#072B60',
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '60px',
        marginBottom: '10px',
        textAlign: 'left' 
    };

    const descriptionStyle = {
        color: '#000',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '32px',
        letterSpacing: '-0.264px',
        textAlign: 'left'
    };

    return (
        <div style={cardStyle}>
            <img src={imgSrc} alt={title} style={{ alignSelf: 'start', marginBottom: '10px' }} />
            <h4 style={titleStyle}>{title}</h4>
            <p style={descriptionStyle}>{text}</p>
        </div>
    );
}



export default MissionVisionItem;
