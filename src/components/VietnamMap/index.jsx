import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const provinces = [
    {
        name: "Hà Giang",
        coordinates: [22.7662056, 104.9388853],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Cao Bằng",
        coordinates: [22.665679, 106.2522144],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Lạng Sơn",
        coordinates: [21.853639, 106.761304],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Sơn La",
        coordinates: [21.102228, 103.728917],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Lào Cai",
        coordinates: [22.485722, 103.97532],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Quảng Trị",
        coordinates: [16.794347, 107.072738],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Thừa Thiên Huế",
        coordinates: [16.467397, 107.590532],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Đà Nẵng",
        coordinates: [16.047079, 108.20623],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    {
        name: "Hiệp Đức",
        coordinates: [15.903063, 108.132959],
        iconUrl: "/assets/images/icons/Frame 1000009144.png",
    },
    // ...thêm các tỉnh khác vào đây
];

const provinceDetails = {
    "Cao Bằng": [
        {
            year: 2017,
            location: "Quoc Dan Commune, Quang Uyen District",
            schools: "Lũng Lạn Primary School, Bình Lãng Primary School",
        },
        {
            year: 2021,
            location: "Khanh Xuan Commune, Bao Lac District",
            schools: "Thông Lung Primary School, Khánh Xuân Secondary School",
        },
    ],
    "Lào Cai": [
        {
            year: 2018,
            location: "Hoang Thu Pho Commune, Bac Ha District",
            schools: "Tả Văn Chư Primary School, Tả Văn Chư Secondary School",
        },
        {
            year: 2022,
            location: "A Lu Commune, Bat Xat District",
            schools: "Ngải Thầu Primary School, Ngải Thầu Primary School",
        },
    ],
    "Lạng Sơn": {
        year: 2019,
        location: "Yen Lo Commune, Binh Gia District",
        schools: "Yên Lỗ Primary School",
    },
    "Hà Giang": [
        {
            year: 2020,
            location: "Coc Commune, Xin Man District",
            schools: "Xín Mần Primary School, Xín Mần Secondary School",
        },
        {
            year: 2016,
            location: "Sang Tung Commune, Dong Van District",
            schools: "",
        },
    ],
    "Sơn La": {
        year: 2023,
        location: "E Tong Commune, Uan Chau District",
        schools: "É Tòng Primary School, É Tòng Secondary School",
    },
    "Thừa Thiên Huế": {
        year: 2010,
        location: "Phu Loc District",
        schools: "",
    },
    "Khánh Hòa": {
        year: 2015,
        location: "Ta Gu Village, Son Hiep Comm, Khanh Son District",
        schools: "",
    },
    "Quảng Nam": {
        year: 2011,
        location: "Zara Village",
        schools: "",
    },
    "Hòa Bình": {
        year: 2014,
        location: "Xo Village, Nao Commune, Mai Chau District",
        schools: "",
    },
    // ...thêm các tỉnh khác vào đây
};

const ZoomToMarker = ({ position }) => {
    const map = useMap();
    map.flyTo(position, 10); // zoom level 10, bạn có thể thay đổi giá trị này
    return null;
};

const VietnamMap = () => {
    const [activePosition, setActivePosition] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const mapRef = useRef(null);

    const handleMarkerClick = (position) => {
        setActivePosition(position);
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    useEffect(() => {
        const onScroll = () => {
            if (mapRef.current && isElementInViewport(mapRef.current)) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToContent = () => {
        if (mapRef.current) {
            window.scrollTo({
                top: mapRef.current.offsetTop + mapRef.current.clientHeight,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <style jsx>{`
        .scroll-button {
          display: ${showScrollButton ? "flex" : "none"};
          position: fixed;
          bottom: 20%;
          left: 50%;
          transform: translate(-50%, 50%);
          z-index: 1000;
          background-color: #D30060;
          color: white;
          border: none;
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s;
        }

        .scroll-button:hover {
          background-color: #0056b3;
        }
        .popup-content {
          display: flex;
          flex-direction: column;
          width: 218px;
          padding: 20px;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
          border-radius: 8px;
          background: #fff;
          font-size: 18px; /* <-- Updated font size */
          line-height: 1.5; /* <-- Updated line height */
        }
        .popup-content strong {
          font-size: 20px; /* <-- Updated font size for province name */
          margin-bottom: 10px; /* <-- Updated margin */
        }
        .popup-content div {
          margin-bottom: 5px; /* <-- Updated margin */
        }
      `}</style>
            <div ref={mapRef}>
                <MapContainer
                    center={[18.6765, 105.6868]}
                    zoom={6.5}
                    style={{ height: "700px", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {provinces.map((province) => (
                        <Marker
                            key={province.name}
                            position={province.coordinates}
                            icon={L.divIcon({
                                className: "",
                                html: `
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <img src="${province.iconUrl}" alt="${province.name}" style="width: 35px; height: 45px;">
                                    <div style="
                                        display: flex;
                                        width: 102.234px;
                                        height: 40.124px;
                                        justify-content: center;
                                        align-items: center;
                                        padding: 6.015px 12.029px;
                                        background-color: white;
                                        border-radius: 60px;
                                        margin-top: 5px;
                                        font-size: 16px;
                                        font-weight: bold;
                                        gap: 6.015px;
                                        flex-shrink: 0;
                                    ">
                                        ${province.name}
                                    </div>
                                </div>
                            `,
                                iconSize: [35, 45],
                                popupAnchor: [0, -20],
                            })}
                            eventHandlers={{
                                click: () => handleMarkerClick(province.coordinates),
                            }}
                        >
                            <Popup>
                                <div className="popup-content">
                                    <div>
                                        <strong>{province.name} Province</strong>
                                        {provinceDetails[province.name] ? (
                                            <>
                                                <div>Year: {provinceDetails[province.name].year}</div>
                                                <div>
                                                    Location: {provinceDetails[province.name].location}
                                                </div>
                                                <div>{provinceDetails[province.name].schools}</div>
                                            </>
                                        ) : (
                                            <div>No details available</div>
                                        )}
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    {activePosition && <ZoomToMarker position={activePosition} />}
                </MapContainer>
            </div>
            <button className="scroll-button" onClick={scrollToContent}>
                Skip Map
            </button>
        </>
    );
};

export default VietnamMap;
