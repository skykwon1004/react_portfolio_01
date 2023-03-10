import { Link } from 'react-router-dom';
import '../css/MainInformation.scss';
import { BsFillPlusSquareFill, BsFillMapFill, BsFillTelephoneFill } from "react-icons/bs";
// import Map from './Map';

const MainInformation = ({ SECTION, NOTICE, DEFAULT }) => {
    return (
        <section className="MainInformation sec">
            <div className="inner">
                <h2>{SECTION[1].title}</h2>
                <div className="infor_wrapper">
                    <div className="left">
                        <ul>
                            <div className='notice_wrapper'>
                                <Link to="" className='notice'>{DEFAULT.notice}</Link>
                                <Link to="" className='notice_icon'><BsFillPlusSquareFill /></Link>
                            </div>
                            {
                                NOTICE.content.map((it, idx) => {
                                    return (
                                        <Link to="">
                                            <li><strong>{it.subject}</strong><span>{it.date}</span></li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="right">
                        <div className='tel'>
                            <Link to="/">
                                <BsFillTelephoneFill className="tel_icon" />
                                <strong>{DEFAULT.tel_text}</strong>
                                <span>{DEFAULT.tel}</span>
                            </Link>
                        </div>
                        <div className='address'>
                            <Link to="/">
                                <BsFillMapFill className="map_icon" />
                                <strong>{DEFAULT.address_text}</strong>
                                <span>{DEFAULT.address}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainInformation;