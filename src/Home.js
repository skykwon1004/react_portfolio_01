import { DEFAULT, D_CONTENTS, NAV, SECTION, BRAND_ITM, CGV, NOTICE, FOOTER, UTA_MALL_P } from "./data/default";
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

const Home = () => {
    return (
        <>
            <Header NAV={NAV} />
            <Outlet />
            <Footer FOOTER={FOOTER} />
        </>
    )
}

export default Home;