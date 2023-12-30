

const GuestStory1 = () => {
    return(
        <div>
            <div style={{
                backgroundColor: 'white',
                gap: '16p',
                width: '418px',
                height: '510px',
                marginTop: 'auto',
                marginRight: '16px',
                borderRadius: '16px',
                padding: '16px 16px 32px 16px',
                flexDirection: 'column',
                display: 'flex',
                                        
                justifyContent: 'left'
                }}>
                <div className="inner" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}>
                    <div className="thumbnail">
                        <img
                            src={`/assets/images/banner/Rectangle 582(8).png`}
                            alt="Course Meta"
                            style={{
                                width: '386px',
                                height: '272px',
                                objectFit: 'cover',
                                borderRadius: '12px 12px 12px 12px',
                                marginBottom:'5px'
                            }}
                        />
                    </div>
                    <span style={{
                        marginTop: '5px',
                        marginBottom: '5px',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        padding: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: '100px',
                        background: '#FFDCED',
                        color: 'black',
                        width: '225px',
                        height: '50px'
                        
                    }}>She Inspires Me Podcast</span>

                    <div className="content" style={{
                        width:'437px',
                        height: '290px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}>
                            <h2 style={{
                                margin: '5px 0px 0px 0px',
                                fontSize: '21px',
                                textAlign: 'left',
                                width: '386px'
                            }}>
                            A leader doesn’t need to be the loudest person in the room
                            </h2>
                            <p style={{
                                fontSize: '16px',
                                width: '400px',
                                textAlign: 'left',
                                marginTop: '0px'
                            }}>
                            This project shows children how supermarkets look and where education can lead them.
                            </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GuestStory1;