import { Route, Routes } from "react-router-dom"
import ToTop from "./components/ToTop";
import Main from "./pages/Main";
import UtaMall from "./pages/UtaMall";
import Contact from "./pages/Contact";
import Home from "./Home";
import List from "./board/List";
import View from "./board/View";
import Modify from "./board/Modify";
import Write from "./board/Write";
import Board from "./pages/Board";
import Test from "./components/Test";
import Test01 from "./components/Test01";
import { useRef, useState } from "react";

const App = () => {
  const [list, setList] = useState([
    { id: 1, name: "관리자", subject: "첫번째 게시물", content: "01우리나라 대한민국 만세", date: "2023.03.29" },
    { id: 2, name: "관리자", subject: "두번째 게시물", content: "02우리나라 대한민국 만세", date: "2023.03.30" },
  ]);

  const idRef = useRef(3);

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}>  {/* header 와 footer를 고정 시킨것 Home */}
          <Route index element={<Main />} />
          <Route path="sub01" element={<UtaMall />} />{/* /sub01 갔을때 UtaMall 부분을 불러 Outlet씀 */}
          <Route path="sub02" element={<Board />}>
            <Route index element={<List list={list} />} />
            <Route path="notice" element={<List list={list} />} />
            <Route path="view/:id" element={<View list={list} setList={setList} />} />
            <Route path="modify/:id" element={<Modify list={list} setList={setList} />} />
            <Route path="write" element={<Write list={list} setList={setList} idRef={idRef} />} />
            <Route path="bid" element={<Test01 />} />
          </Route>
          <Route path="sub03" element={<Test />} />
          <Route path="sub04" element={<Contact />} />
        </Route>
      </Routes>

      <ToTop />
    </>
  )
}

export default App;
