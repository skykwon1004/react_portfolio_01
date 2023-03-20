import { NAV, UTA_MALL_P } from "../data/default";
import SubTitle from "../components/SubTitle";
import UtaMall_Main from "../components/UtaMall_Main";

const UtaMall = ({}) => {
    return (
        <>
            <SubTitle NAV={NAV} idx={0}/>
            <UtaMall_Main NAV={NAV} UTA_MALL_P={UTA_MALL_P} />
        </>
    )
}

export default UtaMall;