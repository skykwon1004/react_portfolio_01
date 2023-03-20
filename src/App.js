import { Route, Routes } from "react-router-dom"
import ToTop from "./components/ToTop";
import Main from "./pages/Main";
import UtaMall from "./pages/UtaMall";
import Contact from "./pages/Contact";
import Home from "./Home";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}>  {/* header 와 footer를 고정 시킨것 Home */}
          <Route index element={<Main />} />
          <Route path="sub01" element={<UtaMall />} />{/* /sub01 갔을때 UtaMall 부분을 불러 Outlet씀 */}
          <Route path="sub04" element={<Contact />} />
        </Route>
      </Routes>

      <ToTop />
    </>
  )
}

export default App;
