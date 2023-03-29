import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";


const ModifyWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
const Ul = styled.ul`
display: flex;
gap: 20px;
width: 1200px;
`
const Li = styled.li`
`
const Input = styled.input`
display: inline-block;
padding: 4px 10px;
border-radius: 5px;
border: 1px solid #d0d3db;
box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
`
const Label = styled.label`
display: inline-block;
margin: 0 5px 10px 0;
padding: 5px 10px;
border-radius: 5px;
border: 1px solid #d0d3db;
box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
`
const TextAreaDiv = styled.div`
`
const TextArea = styled.textarea`
width: 1200px;
height: 500px;
display: inline-block;
margin: 0 0 30px 0;
border-radius: 5px;
border: 1px solid #d0d3db;
box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
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



const Modify = ({ list, setList }) => {
    const { id } = useParams();
    const itm = list.find(it => String(it.id) === id);

    const [inputs, setInputs] = useState({
        name: itm.name,
        subject: itm.subject,
        content: itm.content,
    });

    const navigate = useNavigate();

    const onModify = () => {
        if (inputs.subject.length < 3) {
            alert('제목을 2자 이상 넣어주세요');
            return
        }

        const r = list.map(it => String(it.id) === id ? {
            ...itm,
            name: inputs.name,
            subject: inputs.subject,
            content: inputs.content
        } : it);

        setList(r);
        navigate(`/sub02/view/${id}`);
    }

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    return (
        <section className="title inner">
            <ModifyWrap>
                <Ul>
                    <Li>
                        <Label>제목</Label>
                        <Input name="subject" value={inputs.subject} onChange={onChange} />
                    </Li>
                    <Li>
                        <Label>이름</Label>
                        <Input name="name" value={inputs.name} onChange={onChange} />
                    </Li>
                </Ul>
                <TextAreaDiv>
                    <Label>내용</Label>
                    <TextArea name="content" value={inputs.content} onChange={onChange} />

                    <WriteBtn>
                        <Btn onClick={onModify}>수정</Btn>
                    </WriteBtn>
                </TextAreaDiv>
            </ModifyWrap>
        </section>
    )
}

export default Modify;