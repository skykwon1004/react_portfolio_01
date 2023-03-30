import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
border-top: 2px solid #333;
width: 1200px;
margin: 0 auto 50px auto;
`
const Tr = styled.tr`
height: 40px;
`
const Td = styled.td`
border-bottom: 1px solid #ddd;
padding: 0 10px;
`

const Thead = styled.thead`
height: 50px;
background: #f9f9f9;
`
const WriteBtn = styled.div`
    display: block;
    text-align: right;
`
const Btn = styled.button`
    background: #ff5a2b;
    border: none;
    padding: 8px 25px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    font-family: 'Pretendard', 'Roboto', 'Noto Sans KR', sans-serif;
`

const Bid = ({ list_bid }) => {
    const natigate = useNavigate();
    return (
        <section className="title inner">
            <h2>공개입찰</h2>
            <Table>
                <Thead>
                    <Tr>
                        <Td>no</Td>
                        <Td>제목</Td>
                        <Td>글쓴이</Td>
                        <Td>날짜</Td>
                    </Tr>
                </Thead>
                <tbody>
                    {
                        list_bid.map((it, idx) => {
                            return (
                                <Tr key={it.id}>
                                    <Td>{idx + 1}</Td>
                                    <Td><Link to={`/sub02/view_bid/${it.id}`}>{it.subject}</Link></Td>
                                    <Td>{it.name}</Td>
                                    <Td>{it.date}</Td>
                                </Tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {/* <WriteBtn>
                <Btn onClick={() => natigate('/sub02/write')}>글쓰기</Btn>
            </WriteBtn> */}
        </section>
    )
}

export default Bid;