import Slider from "react-slick"
import "slick-carousel/slick/slick.css";

const MainVisual = () => {
    const settings = {
        dots: false,
        arrows: true,
    }

    return (
        <section className="MainVisual">
            <Slider {...settings}>
                <div><img src={process.env.PUBLIC_URL + '/images/main01.jpg'} /></div>
                <div><img src={process.env.PUBLIC_URL + '/images/main02.jpg'} /></div>
            </Slider>
        </section>
    )
}

export default MainVisual;
// Experience the Difference
