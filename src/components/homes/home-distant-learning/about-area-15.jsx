import Link from "next/link";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AboutAreaFifteen = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    const cardContents = [
        'Lack educational and support system',
        'Inability to read and write properly',
        'Employment limitation',
        'Domestic abuse',
        'Early marriages'
    ];
    return (
        <div className="gap-bottom-equal edu-about-area" style={{
            backgroundColor: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px',
        }}>
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img
                                className="main-img-1"
                                src="/assets/images/about/Rectangle 600.png"
                                alt="About Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {cardContents.map((content, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                width: '528px',
                                height: '76px',
                                padding: '10px 20px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#E4F2FF',
                                borderRadius: '8px',
                                color: 'black',
                                marginBottom: index !== cardContents.length - 1 ? '36px' : '0',
                            }}>
                                {content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaFifteen;
