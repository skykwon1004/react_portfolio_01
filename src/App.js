import { DEFAULT, D_CONTENTS, NAV, SECTION, BRAND_ITM, CGV, NOTICE, FOOTER, UTA_MALL_P } from "./data/default";
import { Link, NavLink, Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import Main from "./pages/Main";
import UtaMall from "./pages/UtaMall";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Header NAV={NAV} />




      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<UtaMall/>}></Route>
        <Route path="/:id" element={<Contact/>}></Route>
      </Routes>





      <Footer FOOTER={FOOTER} />
      <ToTop />
    </>
  )
}

export default App;
