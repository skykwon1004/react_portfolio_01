import { NAV } from "../data/default";
import SubTitle from "../components/SubTitle";
import Test from "../components/Test";
import KakaoMap from "../components/KakaoMap";

const Contact = ({}) => {
    return (
        <>
            <SubTitle NAV={NAV} idx={3} />
            <KakaoMap />
        </>
    )
}

export default Contact;