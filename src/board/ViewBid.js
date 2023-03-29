import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";

const Ul = styled.ul`
`
const Li = styled.li`
display:flex;
border-bottom: 1px solid #ddd;
line-height: 50px;
`

const Strong = styled.strong`
display: block;
margin: 0 30px 0 0;
font-size: 17px;
font-weight: 500;
`

const Span = styled.span`
display: block;
margin: 0 20px 0 0;
font-size: 17px;
font-weight: 300;
color: #555;
`
const WriteBtn = styled.div`
    display: block;
    text-align: right;
`
const Btn = styled.button`
    background: #ff5a2b;
    margin: 30px 5px 0 0;
    border: none;
    padding: 8px 25px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    font-family: 'Pretendard', 'Roboto', 'Noto Sans KR', sans-serif;
`

const ViewBid = ({ list_bid, setList_bid }) => {
    const { id } = useParams();
    const itm = list_bid.find(it => String(it.id) === id);

    const navigate = useNavigate();

    // const onModify = () => {
    //     navigate(`/sub02/modify/${id}`)
    // }

    const onDelete = () => {
        //list에서 id === id 를 제외한 새배열을 만들어서 삭제기능 구현
        const r = list_bid.filter(it => String(it.id) !== id)
        setList_bid(r)
        navigate('/sub02/bid')
    }

    return (
        <section className="title inner">
            <Ul>
                <Li>
                    <Strong>제목</Strong>
                    <Span>{itm.subject}</Span>
                </Li>
                <Li>
                    <Strong>이름</Strong>
                    <Span>{itm.name}</Span>
                </Li>
                <Li>
                    <Strong>날짜</Strong>
                    <Span>{itm.date}</Span>
                </Li>
                <Li>
                    <Strong>내용</Strong>
                    {/* css 띄어쓰기 적용 white-space: pre-line;*/}
                    <Span style={{ whiteSpace: 'pre-line' }}>{itm.content}</Span>
                </Li>
            </Ul>
            <WriteBtn>
                {/* <Btn onClick={onModify}>수정하기</Btn> */}
                <Btn onClick={onDelete}>삭제하기</Btn>
            </WriteBtn>
        </section>
    )
}

export default ViewBid;