import { DEFAULT, D_CONTENTS, SECTION, BRAND_ITM, CGV, NOTICE } from "../data/default";
import MainVisual from '../components/MainVisual';
import MainBrand from "../components/MainBrand";
import MainBanner from "../components/MainBanner";
import MainInformation from "../components/MainInformation";

const Main = ({}) => {
    return (
        <>
            <MainVisual DEFAULT={DEFAULT} D_CONTENTS={D_CONTENTS} />
            <MainBrand SECTION={SECTION} BRAND_ITM={BRAND_ITM} />
            <MainBanner CGV={CGV} />
            <MainInformation DEFAULT={DEFAULT} SECTION={SECTION} NOTICE={NOTICE} />
        </>
    )
}

export default Main;