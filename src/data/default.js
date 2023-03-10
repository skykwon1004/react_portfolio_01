export const DEFAULT = {
    company: '유타몰',
    tel: '02) 925-9999',
    tel_text: '문의전화',
    address: '서울시 성북구 동소문로 106 (동선동 1가)',
    address_text: '오시는 길',
    ceo: '하용락',
    parking: '유타몰 주차장 안내',
    more: '자세히 보기',
    notice: '공지사항'
}

export const D_CONTENTS = [
    {
        id: '1',
        title: 'Experience the Difference',
        desc: '삶의 유토피아 유타몰에서 찾으세요'
    },
    {
        id: '2',
        title: 'Experience the Difference',
        desc: '성북의 랜드마크 복합 라이프스타일 쇼핑몰'
    },
]

export const NAV = [
    {
        id: '1',
        title: '유타몰소개',
        link: '/',
    },
    {
        id: '2',
        title: '유타몰안내',
        link: '/',
        submenu: [
            {
                title: '공지사항',
                link: '/sub01',
            },
            {
                title: '공개입찰',
                link: '/sub02',
            },
            {
                title: '관리비',
                link: '/sub03',
            }
        ]
    },
    {
        id: '3',
        title: '층별안내',
        link: '/',
    },
    {
        id: '4',
        title: '오시는길',
        link: '/',
    },
]

export const SECTION = [
    {
        id: '1',
        title: 'About Uta Mall',
    },

    {
        id: '2',
        title: 'More Information',
    },
    
]

export const BRAND_ITM = [
    {
        id:1,
        title:'성북의 중심 랜드마크',
        number:'SINCE 2009년',
        desc:'2009년 쇼핑몰 오픈부터 지금까지, 앞으로도 지역과 함께 성장하는 유타쇼핑몰이 되겠습니다.'
    },
    {
        id:2,
        title:'복합 문화 쇼핑몰',
        number:'총 16층',
        desc:'지하 2층부터 14층까지 총 16층 복합 문화 쇼핑몰, 편리한 주차시설을 제공합니다.'
    },
    {
        id:3,
        title:'초역세권 쇼핑몰',
        number:'초역세권 4호선',
        desc:'지하철 4호선 성신여대입구역과 연결되어 있는 초역세권 복합 문화 쇼핑몰입니다.'
    },
]

export const CGV = [
    {
        id:1,
        title:'영화 그 이상의 감동',
        desc:'CGV는 선진화된 관람문화와 최고의 서비스로 고객에게 잊을 수 없는 감동을 선사합니다.'
    }
]

export const NOTICE = {
    title: 'Notice',
    content: [
        {id:1, subject:'2023년 설 연휴 유타몰 매장 휴무 안내', date:'2023.01.18'},
        {id:2, subject:'2022년 설 연휴 유타몰 매장 휴무 안내', date:'2022.02.11'},
        {id:3, subject:'2021년 추석 연휴 유타몰 휴무 안내', date:'2022.02.11'},
        {id:4, subject:'2021년 설 연휴 유타몰 매장 휴무 안내', date:'2022.02.11'},
        {id:5, subject:'신종 코로나 사태 관련 방역 조치 완료 안내', date:'2022.02.11'},
    ]
}

export const FOOTER = {
    service: [
        { title: '온라인 고객 서비스-02)925-9999'},
        { title: '상호-(주)유타몰'},
        { title: '대표자 성명-하용락'},
        { title: '서울시 성북구 동소문로 106(동선동 1가)'},
        { title: '사업자등록번호-186-81-00211'},
    ],
}
