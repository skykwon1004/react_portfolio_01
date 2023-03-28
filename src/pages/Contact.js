import { NAV, DEFAULT, TOTAL_PARK } from "../data/default";
import SubTitle from "../components/SubTitle";
import KakaoMap from "../components/KakaoMap";

const Contact = ({ }) => {
    return (
        <>
            <SubTitle NAV={NAV} idx={3} />
            <KakaoMap NAV={NAV} DEFAULT={DEFAULT} TOTAL_PARK={TOTAL_PARK} />
        </>
    )
}

export default Contact;