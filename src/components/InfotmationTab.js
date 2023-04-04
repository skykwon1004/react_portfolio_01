import { useState } from 'react';
import '../css/InformationTab.scss';


const InfotmationTab = () => {
    // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 num 상태와 num을 갱신하는 함수가 존재해야 하고, 초기값은 0.
    const [num, setNum] = useState(0);

    const MenuArr = [
        { name: 'B2', content: '뉴발란스, 후아유, 로엠' },
        { name: 'B1', content: '브리즈PC카페' },
        { name: '1F', content: '미쏘, 폴더' },
        { name: '2F', content: '스파오 여성' },
        { name: '3F', content: '스파오 남성' },
        { name: '4F', content: '피트니스101' },
        { name: '5F', content: '피트니스101' },
        { name: '6F', content: 'J스타일 치과, 지인 산부인과, 듀오 피부과, 육층약국, 플뢰르블랑' },
        { name: '7F', content: '입점 준비중' },
        { name: '8F', content: '성북미올한방병원' },
        { name: '9F', content: '성북미올한방병원' },
        { name: '10F', content: 'CGV 매표점 / 매점 / 상영관 1' },
        { name: '11F', content: 'CGV 상영관 2 / 3' },
        { name: '12F', content: 'CGV 상영관 4 / 5' },
        { name: '13F', content: '프렌즈 아카데미 스크린 골프' },
        { name: '14F', content: '유타BK볼링센터' },
    ];

    const selectMenuHandler = (idx) => {
        setNum(idx);
    };

    return (
        <section className='title inner'>
            <div className='tab_wrap'>
                <ul className='tab_menu'>
                    {
                        MenuArr.map((it, idx) => (
                            <li className={idx === num ? "submenu on" : ""} onClick={() => selectMenuHandler(idx)} key={idx}>
                                {it.name}
                            </li>
                        ))
                    }
                </ul>
                <div className='content'>
                    <div>{MenuArr[num].content}</div>
                </div>
            </div>
        </section>
    );
};

// https://prod.velog.io/@fejigu/React-Tab-Component-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0 참고
export default InfotmationTab;