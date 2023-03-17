import '../css/SubTitle.scss';
import { BsHouseDoorFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const SubTitle = ({ NAV, idx }) => {
    const [subTitle, setSubTitle] = useState ('');
   
const {id} = useParams();
const title = NAV.find(it => it.link === `/${id}`)


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
                <h2>{title.title}</h2>
            </div>
            <div className="SubMenuBar">
                <div class="inner">
                    <Link to="/"><BsHouseDoorFill className='Home' /></Link>
                    <strong>{title.title}</strong>
                </div>
            </div>
        </section>
    )
}

export default SubTitle;