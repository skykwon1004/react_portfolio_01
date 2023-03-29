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
                <div className="address_itm top">
                    <strong>{DEFAULT.map}</strong>
                    <span>{DEFAULT.address}</span>
                </div>
                <div className="address_itm bottom">
                    <strong>{DEFAULT.parking}</strong>
                    <div className="park_text">
                        {
                            TOTAL_PARK.map((it, idx) => {
                                return (
                                    <div>
                                        <div className="park_text_title">{it.title}</div>
                                        <div className={`park_text_desc park_text_desc0${idx + 1}`}>{it.desc}</div>
                                    </div>
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
