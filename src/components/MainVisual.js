import { useEffect, useRef, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import '../css/MainVisual.scss';
import { BsCarFrontFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainVisual = ({ DEFAULT, D_CONTENTS }) => {
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        afterChange: idx => setSNum(idx)
    }

    const s = useRef(null);

    const [sNum, setSNum] = useState();

    useEffect(() => {
        setSNum(0);
    }, [])

    return (
        <section className="MainVisual">
            <Slider
                {...settings}
                ref={s}
            >
                {
                    D_CONTENTS.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`}>
                                <div className="inner">
                                    <h2>{it.title}</h2>
                                    <p>{it.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

            <div className="arrows">
                {console.log(s.current)}
                <button onClick={() => s.current.slickPrev()} className='prev'>뒤로가기</button>
                <button onClick={() => s.current.slickNext()} className='next'>앞로가기</button>
            </div>

            <div className="scroll">
                scroll down
            </div>

            <div className="parking">
                <Link to="/">
                    <div className="parking_tit">
                        <h3>{DEFAULT.parking}</h3> <BsCarFrontFill className="icon" />
                    </div>
                </Link>
            </div>


        </section>
    )
}

export default MainVisual;
// Experience the Difference
