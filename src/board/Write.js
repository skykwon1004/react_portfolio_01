import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Form = styled.form`
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



const Write = ({ list, setList, idRef }) => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const input = useRef([]);

    //console.log(inputs);
    const time = new Date();

    const inputHandler = e => {
        const { name, value } = e.target;
        setInputs(
            {
                id: idRef.current,
                ...inputs,
                [name]: value,
                date: time.toLocaleDateString()
            }
        );
    }

    //console.log(input.current.length, input.current[0])
    const onSubmit = e => {
        e.preventDefault();
        for (let i = 0; i < input.current.length; i++) {
            if (input.current[i].value.length < 2) {
                alert(`${input.current[i].name}은 2자 이상 입력하세요`);
                input.current[i].focus();
                return
            }
        }
        // if (inputs.subject.length < 5) {
        //     alert('제목은 4자 이상 입력하세용');
        //     input.current[0].focus();
        //     return
        // }
        setList([
            ...list,
            inputs
        ]);

        idRef.current = idRef.current + 1;

        navigate('/sub02/notice')
    }

    return (
        <section className="title inner">
            <Form onSubmit={onSubmit}>
                <Ul>
                    <Li>
                        <Label htmlFor="subject">제목</Label>
                        <Input
                            type="text"
                            id="subject"
                            name="subject"
                            onChange={inputHandler}
                            required
                            ref={el => input.current[0] = el}
                        />
                    </Li>
                    <Li>
                        <Label htmlFor="name">이름</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            onChange={inputHandler}
                            required
                            ref={el => input.current[1] = el}
                        />
                    </Li>
                </Ul>
                <TextAreaDiv>
                    <Label htmlFor="content">내용</Label>
                    <TextArea
                        type="text"
                        id="content"
                        name="content"
                        onChange={inputHandler}
                        required
                        ref={el => input.current[2] = el}
                    />

                    <WriteBtn>
                        <Btn>작성완료</Btn>
                    </WriteBtn>
                </TextAreaDiv>

            </Form>
        </section>
    )
}

export default Write