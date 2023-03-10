import { DEFAULT, D_CONTENTS, NAV, SECTION, BRAND_ITM, CGV, NOTICE, FOOTER } from "./data/default";
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import MainBrand from "./components/MainBrand";
import MainBanner from "./components/MainBanner";
import MainInformation from "./components/MainInformation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header NAV={NAV} />
      <MainVisual DEFAULT={DEFAULT} D_CONTENTS={D_CONTENTS} />
      <MainBrand SECTION={SECTION} BRAND_ITM={BRAND_ITM} />
      <MainBanner CGV={CGV} />
      <MainInformation DEFAULT={DEFAULT} SECTION={SECTION} NOTICE={NOTICE} />
      <Footer FOOTER={FOOTER} />
    </>
  )
}

export default App;
