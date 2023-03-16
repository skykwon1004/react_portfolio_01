import '../css/SubTitle.scss';
import { BsHouseDoorFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SubTitle = ({ NAV }) => {
    return (
        <section className="SubTitle">
            <div className="inner">
                {/* {
                    NAV.map((it, idx) => {
                        return (
                            <h2>
                                {it.title}
                            </h2>
                        )
                    })
                } */}
                <h2>{NAV[0].title}</h2>
            </div>
            <div className="SubMenuBar">
                <div class="inner">
                    <Link to="/"><BsHouseDoorFill className='Home' /></Link>
                    <strong>{NAV[0].title}</strong>
                </div>
            </div>
        </section>
    )
}

export default SubTitle;