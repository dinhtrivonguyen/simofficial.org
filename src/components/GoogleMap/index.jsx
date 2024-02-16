import React, { useState } from 'react';
import {
    GoogleMap as GG,
    useJsApiLoader,
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
    const { isLoaded, loadError } = useJsApiLoader({
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
                        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyMCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNTU3NDkgMS4yNTE5NUM3LjA0MTQ3IDEuMjUxODMgNC42MjcwOCAyLjI0NDczIDIuODM5MDcgNC4wMTQ4NkMxLjA1MTA3IDUuNzg0OTkgMC4wMzM5NDkyIDguMTg5MjggMC4wMDg3ODkwNiAxMC43MDUyQzAuMDA4Nzg5MDYgMTcuMjQ2IDguNDIzNTggMjQuNTI2OSA4Ljc4MTY1IDI0LjgzNzJDOC45OTc4NSAyNS4wMjIyIDkuMjcyOTkgMjUuMTIzOCA5LjU1NzQ5IDI1LjEyMzhDOS44NDE5OCAyNS4xMjM4IDEwLjExNzEgMjUuMDIyMiAxMC4zMzMzIDI0LjgzNzJDMTAuNzUxMSAyNC41MjY5IDE5LjEwNjIgMTcuMjQ2IDE5LjEwNjIgMTAuNzA1MkMxOS4wODEgOC4xODkyOCAxOC4wNjM5IDUuNzg0OTkgMTYuMjc1OSA0LjAxNDg2QzE0LjQ4NzkgMi4yNDQ3MyAxMi4wNzM1IDEuMjUxODMgOS41NTc0OSAxLjI1MTk1Wk05LjU1NzQ5IDE0LjM4MTRDOC43MzEyNCAxNC4zODE0IDcuOTIzNTYgMTQuMTM2NCA3LjIzNjU2IDEzLjY3NzRDNi41NDk1NiAxMy4yMTgzIDYuMDE0MTIgMTIuNTY1OSA1LjY5NzkzIDExLjgwMjVDNS4zODE3NCAxMS4wMzkyIDUuMjk5MDEgMTAuMTk5MiA1LjQ2MDIgOS4zODg4NkM1LjYyMTM5IDguNTc4NDkgNi4wMTkyNyA3LjgzNDEyIDYuNjAzNTEgNy4yNDk4OEM3LjE4Nzc1IDYuNjY1NjQgNy45MzIxMiA2LjI2Nzc3IDguNzQyNDkgNi4xMDY1N0M5LjU1Mjg1IDUuOTQ1MzggMTAuMzkyOCA2LjAyODExIDExLjE1NjIgNi4zNDQzQzExLjkxOTUgNi42NjA0OSAxMi41NzIgNy4xOTU5NCAxMy4wMzEgNy44ODI5M0MxMy40OSA4LjU2OTkzIDEzLjczNSA5LjM3NzYyIDEzLjczNSAxMC4yMDM5QzEzLjczNSAxMS4zMTE4IDEzLjI5NDkgMTIuMzc0NCAxMi41MTE1IDEzLjE1NzhDMTEuNzI4IDEzLjk0MTMgMTAuNjY1NCAxNC4zODE0IDkuNTU3NDkgMTQuMzgxNFoiIGZpbGw9IiNFRDIwN0QiLz4KPHBhdGggZD0iTTkuNjA2NTIgMTguMzk2NkMxNC4xMzAzIDE4LjM5NjYgMTcuNzk3NSAxNC43Mjk0IDE3Ljc5NzUgMTAuMjA1NkMxNy43OTc1IDUuNjgxODggMTQuMTMwMyAyLjAxNDY1IDkuNjA2NTIgMi4wMTQ2NUM1LjA4Mjc2IDIuMDE0NjUgMS40MTU1MyA1LjY4MTg4IDEuNDE1NTMgMTAuMjA1NkMxLjQxNTUzIDE0LjcyOTQgNS4wODI3NiAxOC4zOTY2IDkuNjA2NTIgMTguMzk2NloiIGZpbGw9IiNFRDIwN0QiLz4KPHBhdGggZD0iTTEwLjM5NTIgOS4zNDc4NkM5Ljk0NDY4IDkuMzQ3ODYgOS45MjU5MSA5LjY5Mjk0IDEwLjM5NTIgOS42OTI5NEMxMC41NzI4IDkuNjkyOTQgMTAuNzkzNyA5LjYyMjE5IDExLjAxNDYgOS41MDY2OEMxMC43OTM3IDkuNDA5OTUgMTAuNTcyOCA5LjM0Nzg2IDEwLjM5NTIgOS4zNDc4NlpNOC4wNzc3OCAxMC44ODdDOC40MzE1MiAxMS4wNTQ1IDkuMDc2OTMgMTEuMTQ0IDkuMDc2OTMgMTAuOTA0M0M5LjA3NjkzIDEwLjgwNzYgOC45ODAxOSAxMC43MjY3IDguNzc2NiAxMC43MjY3QzguNTU1NjkgMTAuNzI2NyA4LjMxNjAxIDEwLjc4ODggOC4wNzc3OCAxMC44ODU2VjEwLjg4N1pNNy41MjA0NSAxMS4yODU1QzcuNDIzNzEgMTEuMzkyNCA3LjM5NjI4IDExLjQ3MTggNy4zNzAyOSAxMS41MzM5QzcuMjAyOCAxMi40MzYzIDguNTM4MzcgMTIuNjkzMyA5LjQ1ODEgMTIuNjkzM0MxMC40OTMzIDEyLjY5MzMgMTEuMjk3NiAxMi40MTAzIDExLjczMDcgMTEuOTE1QzEyLjAzMTEgMTEuNTg3MyAxMi4xNDY2IDExLjE1NDEgMTIuMDc1OCAxMC42MTQxQzEyLjAzOTcgMTAuMzQ4NSAxMS44ODA5IDEwLjEwMTYgMTEuNTg5MiA5Ljg2MTg3QzExLjIwOTUgMTAuMTM2MiAxMC43NTc2IDEwLjMwMzcgMTAuMzk1MiAxMC4zMDM3QzkuMTIxNjggMTAuMzAzNyA5LjEyMTY4IDguNzM4NTUgMTAuMzk1MiA4LjczODU1QzEwLjc0MDIgOC43Mzg1NSAxMS4xNjQ3IDguODcxMzkgMTEuNTQ0NSA5LjA5MjNDMTEuNjc3MyA4Ljk1MDggMTEuNzIyMSA4LjgyNjYzIDExLjczMDcgOC43NTU4OEMxMS43NTY3IDguNTE3NjQgMTEuNjE1MiA4LjI2MDY0IDExLjM3NyA4LjExMDQ4QzExLjAxNDYgNy44NzIyNCAxMC4zNjkyIDcuNzIwNjQgOS42OTYzNCA3LjcyMDY0QzguNTAyMjcgNy43MjA2NCA3LjIyODc5IDguMTgxMjIgNy4xMzIwNSA5LjE5NzdDNy4xMDYwNiA5LjQwMTI4IDcuMTIzMzkgOS40OTgwMiA3LjEyMzM5IDkuNjMwODZDNy4xMTQ3MyA5Ljg1MTc3IDcuMjQ3NTYgMTAuMTg4MiA3LjUzMDU2IDEwLjQ5NzJDNy45MTAyOSAxMC4yNTg5IDguMzYyMjIgMTAuMTE3NCA4Ljc3ODA1IDEwLjExNzRDOS45NDYxMyAxMC4xMTc0IDkuOTk4MSAxMS42NTY2IDguODIyODEgMTEuNjU2NkM4LjM1MzU1IDExLjY1NjYgNy45MDMwNyAxMS41MjM3IDcuNTIzMzQgMTEuMjg1NUg3LjUyMDQ1Wk05LjQ1NjY2IDEzLjMwMjZDNy4yODA3NyAxMy4zMDI2IDYuNjE4MDQgMTIuMzEyMSA2Ljc3Njg2IDExLjQyN0M2LjgwMjg1IDExLjI0OTQgNi44OTIzNyAxMS4wNzMzIDcuMDU5ODYgMTAuODg3QzYuNzA2MTEgMTAuNTA3MyA2LjUwMjUzIDEwLjAzOCA2LjUxMTE5IDkuNjEzNTNDNi41MTExOSA5LjMzMDUzIDYuMzc4MzYgOC4yMzMyIDcuNjY5MTcgNy41NTMxNUM4LjIzNTE2IDcuMjcwMTUgOC45MTY2NiA3LjExMTMzIDkuNjk0ODkgNy4xMTEzM0MxMC40NzMxIDcuMTExMzMgMTEuMjQyNyA3LjI4ODkyIDExLjcxMiA3LjU5NzkxQzEyLjEyNzggNy44NzIyNCAxMi4zNjYgOC4zNDE0OSAxMi4zNCA4LjgwMDY0QzEyLjMxNCA5LjAwNDIyIDEyLjIyNDUgOS4yMzM4IDEyLjAzOTcgOS40NDYwNEMxMi40MTk0IDkuNzgyNDYgMTIuNjMxNyAxMC4xNDQ5IDEyLjY3NjUgMTAuNTM0N0MxMi43NzMyIDExLjI0MjIgMTIuNjA1NyAxMS44MzU2IDEyLjE4OTkgMTIuMzIwOEMxMS42MjM5IDEyLjk1NzUgMTAuNjU5NCAxMy4zMDI2IDkuNDU2NjYgMTMuMzAyNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==',
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
