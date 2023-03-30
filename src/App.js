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
import { useRef, useState } from "react";
import Bid from "./board/Bid";
import ViewBid from "./board/ViewBid";
import Information from "./pages/Information";

const App = () => {
  const [list, setList] = useState([
    { id: 1, name: "관리자", subject: "주차장 이용안내", content: "주차요금 부과 기준 - 기본 30분 3,000원 이후 10분당 500원 부과", date: "2022.01.02" },
    { id: 2, name: "관리자", subject: "신종 코로나 사태 관련 방역 조치 완료 안내", content: "유타쇼핑몰은 코로나 바이러스 방역과 소독 작업을 실행중입니다.", date: "2022.01.30." },
    { id: 3, name: "관리자", subject: "2023년 설 연휴 유타몰 매장 휴무 안내", content: "2023년 설 연휴 유타몰 매장 정상영업 합니다.", date: "2023.01.18." },
  ]);

  const [list_bid, setList_bid] = useState([
    { id: 1, name: "관리자", subject: "유타몰 승강기(엘리베이터 4기) 노후부품 교체공사 공개경쟁 입찰문.", content: "기타 문의사항은 관리실 전은민 과장으로 연락주세요 02-925-9522, 010-3218-9268", date: "2022.06.07." },
    { id: 2, name: "관리자", subject: "유타몰 급탕용 보일러 1기 교체공사에 대한 공개경쟁 입찰문.", content: "기타 문의사항은 관리실 전은민 과장으로 연락주세요 02-925-9522, 010-3218-9268", date: "2022.05.30." },
    { id: 3, name: "관리자", subject: "공실철거 및 마감공사 업체선정 공개입찰문", content: "공실철거 및 마감공사 업체선정 공고문 입니다. 첨부파일 확인 바랍니다.", date: "2022.02.11." },
  ]);

  const idRef = useRef(4);

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}>  {/* header 와 footer를 고정 시킨것 Home */}
          <Route index element={<Main />} />
          <Route path="sub01" element={<UtaMall />} />{/* /sub01 갔을때 UtaMall 부분을 불러 Outlet씀 */}
          <Route path="sub02" element={<Board />}>
            <Route index element={<List list={list} />} />
            {/* 공지사항 게시판 */}
            <Route path="notice" element={<List list={list} />} />
            <Route path="view/:id" element={<View list={list} setList={setList} />} />
            <Route path="modify/:id" element={<Modify list={list} setList={setList} />} />
            <Route path="write" element={<Write list={list} setList={setList} idRef={idRef} />} />
            {/* 공개입찰 게시판 */}
            <Route path="bid" element={<Bid list_bid={list_bid} />} />
            <Route path="view_bid/:id" element={<ViewBid list_bid={list_bid} setList_bid={setList_bid} />} />
          </Route>
          <Route path="sub03" element={<Information />} />
          <Route path="sub04" element={<Contact />} />
        </Route>
      </Routes>

      <ToTop />
    </>
  )
}

export default App;
