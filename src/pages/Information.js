import { NAV } from "../data/default";
import SubTitle from "../components/SubTitle";
import InfotmationTab from "../components/InfotmationTab";

const Information = ({}) => {
    return (
        <>
            <SubTitle NAV={NAV} idx={2} />
            <InfotmationTab />
        </>
    )
}

export default Information;