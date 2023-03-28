import React from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import '../css/Contact.scss';

const KakaoMap = ({ NAV, DEFAULT, TOTAL_PARK }) => {
    return (
        <section className="KakaoMap inner title">
            <h2>{NAV[3].title}</h2>
            <Map className="map" center={{ lat: 37.592539, lng: 127.017036 }}>
                <MapMarker position={{ lat: 37.592539, lng: 127.017036 }}></MapMarker>
            </Map>

            <div className="address">
                <div className="address_itm">
                    <strong>{DEFAULT.map}</strong>
                    <ul>
                        <li>{DEFAULT.address}</li>
                    </ul>
                </div>
                <div className="address_itm">
                    <strong>{DEFAULT.parking}</strong>
                    <div>
                        {
                            TOTAL_PARK?.map((it, idx) => {
                                return (
                                    <ul>
                                        <li>{it.title}</li>
                                        <li>{it.desc}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KakaoMap;
