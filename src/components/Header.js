import { Link } from "react-router-dom";
import GlobalNav from "./GlobalNav";
import '../css/Header.scss';

const Header = ({NAV}) => {
    return (
        <header className="Header">
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