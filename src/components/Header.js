const Header = () => {
    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} />
                    </a>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li><a href="">유타몰소개</a></li>
                        <li><a href="">유타몰안내</a></li>
                        <li><a href="">층별안내</a></li>
                        <li><a href="">오시는길</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;