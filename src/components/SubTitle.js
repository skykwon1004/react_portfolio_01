import '../css/SubTitle.scss';
import { BsHouseDoorFill } from "react-icons/bs";

const SubTitle = ({ NAV }) => {
    return (
        <section className="SubTitle">
            <div className="inner">
                <h2>{NAV[0].title}</h2>

            </div>
            <div className="SubMenuBar">
                <BsHouseDoorFill className='Home' />
            </div>
        </section>
    )
}

export default SubTitle;