import React, { useState } from 'react';
import {
    GoogleMap as GG,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

const provinces = [
    {
        name: 'Hà Giang',
        coordinates: { lat: 22.7662056, lng: 104.9388853 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Cao Bằng',
        coordinates: { lat: 22.665679, lng: 106.2522144 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Lạng Sơn',
        coordinates: { lat: 21.853639, lng: 106.761304 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Sơn La',
        coordinates: { lat: 21.102228, lng: 103.728917 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Lào Cai',
        coordinates: { lat: 22.485722, lng: 103.97532 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Quảng Trị',
        coordinates: { lat: 16.794347, lng: 107.072738 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Thừa Thiên Huế',
        coordinates: { lat: 16.467397, lng: 107.590532 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Đà Nẵng',
        coordinates: { lat: 16.047079, lng: 108.20623 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    {
        name: 'Hiệp Đức',
        coordinates: { lat: 15.903063, lng: 108.132959 },
        iconUrl: '/assets/images/icons/Frame 1000009144.png',
    },
    // ...thêm các tỉnh khác vào đây
];

const provinceDetails = {
    'Cao Bằng': [
        {
            year: 2017,
            location: 'Quoc Dan Commune, Quang Uyen District',
            schools: 'Lũng Lạn Primary School, Bình Lãng Primary School',
        },
        {
            year: 2021,
            location: 'Khanh Xuan Commune, Bao Lac District',
            schools: 'Thông Lung Primary School, Khánh Xuân Secondary School',
        },
    ],
    'Lào Cai': [
        {
            year: 2018,
            location: 'Hoang Thu Pho Commune, Bac Ha District',
            schools: 'Tả Văn Chư Primary School, Tả Văn Chư Secondary School',
        },
        {
            year: 2022,
            location: 'A Lu Commune, Bat Xat District',
            schools: 'Ngải Thầu Primary School, Ngải Thầu Primary School',
        },
    ],
    'Lạng Sơn': {
        year: 2019,
        location: 'Yen Lo Commune, Binh Gia District',
        schools: 'Yên Lỗ Primary School',
    },
    'Hà Giang': [
        {
            year: 2020,
            location: 'Coc Commune, Xin Man District',
            schools: 'Xín Mần Primary School, Xín Mần Secondary School',
        },
        {
            year: 2016,
            location: 'Sang Tung Commune, Dong Van District',
            schools: '',
        },
    ],
    'Sơn La': {
        year: 2023,
        location: 'E Tong Commune, Uan Chau District',
        schools: 'É Tòng Primary School, É Tòng Secondary School',
    },
    'Thừa Thiên Huế': {
        year: 2010,
        location: 'Phu Loc District',
        schools: '',
    },
    'Khánh Hòa': {
        year: 2015,
        location: 'Ta Gu Village, Son Hiep Comm, Khanh Son District',
        schools: '',
    },
    'Quảng Nam': {
        year: 2011,
        location: 'Zara Village',
        schools: '',
    },
    'Hòa Bình': {
        year: 2014,
        location: 'Xo Village, Nao Commune, Mai Chau District',
        schools: '',
    },
    // ...thêm các tỉnh khác vào đây
};

const ZoomToMarker = ({ position }) => {
    const map = useMap();
    map.flyTo(position, 10); // zoom level 10, bạn có thể thay đổi giá trị này
    return null;
};

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '800px',
};
const center = {
    lat: 16.816721, // default latitude
    lng: 106.877056, // default longitude
};

const GoogleMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBbOMhtube-vOIv50JsWwhZXH-143XAStw',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <GG
            mapContainerStyle={mapContainerStyle}
            mapTypeId="terrain"
            zoom={6}
            center={center}
        >
            {provinces.map((marker) => (
                <Marker
                    key={marker.name}
                    position={marker.coordinates}
                    icon={{
                        url: '/assets/images/icons/Frame 1000009144.png',
                        // anchor: new google.maps.Point(17, 46),
                        scaledSize: new google.maps.Size(19, 23),
                    }}
                >
                    <InfoWindow
                        position={marker.coordinates}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -25),
                        }}
                    >
                        <div
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '18px',
                                color: 'var(--color-extra13)',
                            }}
                        >
                            {marker.name}
                        </div>
                    </InfoWindow>
                </Marker>
            ))}
        </GG>
    );
};

export default GoogleMap;
