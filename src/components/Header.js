import { Link } from "react-router-dom";

import GlobalNav from "./GlobalNav";
import '../css/Header.scss';
import { useEffect, useRef, useState } from 'react';

const Header = ({ NAV }) => {
    const HL = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let sct = window.scrollY;
            sct > 0
                ? HL.current.classList.add('on')
                : HL.current.classList.remove('on')
        })
    }, [])

    return (
        <header className="Header" ref={HL}>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} />
                    </Link>
                </h1>
                <nav className="GlobalGnb">
                    <GlobalNav NAV={NAV} />
                </nav>
            </div>
        </header>
    )
}

export default Header;

//https://skykwon1004.github.io/react_portfolio_01