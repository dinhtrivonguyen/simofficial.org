import React from 'react';

function CategoryItem({ color, icon, title, text, imgSrc, type, buttonText, onButtonClick }) {
    const cardStyle = {
        width: '640px',
        height: '399px',
        flexShrink: 0,
        borderRadius: '12px',
        background: '#FFDCED',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px 40px',
        alignItems: 'center',
    };

    const titleStyle = {
        color: '#072B60',
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '60px',
        marginBottom: '10px',
        textAlign: 'center',
    };

    const descriptionStyle = {
        color: '#000',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '32px',
        letterSpacing: '-0.264px',
        textAlign: 'left'
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '50px',
        padding: '0px 20px',
        borderRadius: '8px',
        background: '#D30060',
        margin: '0 auto',
        border: 'none',
        color: '#FFF',
        textAlign: 'center',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '32px',
        letterSpacing: '0.5px',
    };

    return (
        <div style={cardStyle}>
            <img src={imgSrc} alt={title} style={{ marginBottom: '10px', display: 'block' }} />
            <h4 style={titleStyle}>{title}</h4>
            <p style={descriptionStyle}>{text}</p>
            {buttonText && onButtonClick && (
                <button onClick={onButtonClick} style={buttonStyle}>
                    {buttonText}
                </button>
            )}
        </div>
    );
}



export default CategoryItem;
