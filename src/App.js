import { DEFAULT, D_CONTENTS, NAV } from "./data/default";
import Header from './components/Header';
import MainVisual from './components/MainVisual';

const App = () => {
  return (
    <>
      <Header NAV={NAV}/>
      <MainVisual D_CONTENTS={D_CONTENTS}/>
    </>
  )
}

export default App;
