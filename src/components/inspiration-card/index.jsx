import React from 'react';

const InspirationCard = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            height: '80vh',
        }}>
            <div style={{
                width: '800px',
                height: '800px',
                flexShrink: 0,
                borderRadius: '16px',
                background: '#F0FFCA',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0px 63px 0 63px',
            }}>
                <h1 style={{
                    width: '555px',
                    color: '#000',
                    fontSize: '56px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '60px',
                    letterSpacing: '-0.666px',
                    textAlign: 'left',
                }}>
                    Be inspired from
                    <br />
                    She Inspires Me Podcast
                </h1>
                <p style={{
                    width: '555px',
                    height: '96px',
                    color: 'rgba(0, 0, 0, 0.80)',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '32px',
                    letterSpacing: '-0.264px',
                    textAlign: 'left',
                }}>
                    Discover inspiring stories from women around the world who have overcome challenges and made a difference in their communities. Tune into the She Inspires Me Podcast and let their experiences motivate you to pursue your own goals and dreams.
                </p>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '67px',
                    textAlign: 'left',
                }}>
                    <button
                        style={{
                            borderRadius: '8px',
                            border: '1px solid #D0D0D0',
                            background: '#FFF',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 700,
                            display: 'flex',
                            color: '#D30060',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                        onClick={() => {/* handle your click event here */ }}
                    >
                        Listen on
                        <img src="/assets/images/icons/Group 1000007220.png" alt="Icon" style={{ width: '90px', height: '20px' }} />
                    </button>
                    <button
                        style={{
                            borderRadius: '8px',
                            border: '1px solid #D0D0D0',
                            background: '#FFF',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 700,
                            display: 'flex',
                            color: '#D30060',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                        onClick={() => {/* handle your click event here */ }}
                    >
                        Listen on
                        <img src="/assets/images/icons/Spotify_Logo_CMYK_Green 1.png" alt="Icon" style={{ width: '95px', height: '30px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InspirationCard;
