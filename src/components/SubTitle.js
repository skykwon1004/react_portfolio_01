import '../css/SubTitle.scss';
import { BsHouseDoorFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';


const SubTitle = ({ NAV,idx }) => {
    // const { sub } = useParams();
    // const navTitle = NAV.find(it => it.link === `/${sub}`)
    return (
        <section className="SubTitle" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets${NAV[idx].link}.jpg)`,
        }}>
            <div className="inner">
                <h2>{NAV[idx].title}</h2>
            </div>
            <div className="SubMenuBar">
                <div className="inner">
                    <Link to="/"><BsHouseDoorFill className='Home' /></Link>
                    <strong>{NAV[idx].title}</strong>
                </div>
            </div>
        </section>

    )
}

export default SubTitle;