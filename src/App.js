import { DEFAULT, D_CONTENTS, NAV, SECTION, BRAND_ITM } from "./data/default";
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import MainNotice from "./components/MainNotice";
import MainBrand from "./components/MainBrand";

const App = () => {
  return (
    <>
      <Header NAV={NAV} />
      <MainVisual DEFAULT={DEFAULT} D_CONTENTS={D_CONTENTS} />
      <MainBrand SECTION={SECTION} BRAND_ITM={BRAND_ITM} />
      <MainBrand />
      <MainNotice />
    </>
  )
}

export default App;
