import { DEFAULT, D_CONTENTS, NAV } from "./data/default";
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import MainContents from "./components/MainContents";

const App = () => {
  return (
    <>
      <Header NAV={NAV}/>
      <MainVisual DEFAULT={DEFAULT} D_CONTENTS={D_CONTENTS}/>
      <MainContents />
    </>
  )
}

export default App;
