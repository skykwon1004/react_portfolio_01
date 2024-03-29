import { Link } from 'react-router-dom';
import '../css/MainBanner.scss';

const MainBanner = ({ CGV }) => {
    return (
        <section className='MainBanner'>
            <div className="inner">
                <h2>{CGV[0].title}</h2>
                <p>{CGV[0].desc}</p>
                <Link to="http://www.cgv.co.kr/theaters/?theaterCode=0300" target="_blank"><button className="btn">자세히 보기</button></Link>
            </div>
        </section>
    )
}

export default MainBanner;