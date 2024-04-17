import "./App.css";
import Boxes2 from "./components/boxes/boxes2/Boxes2";
import Boxes3 from "./components/boxes/boxes3/Boxes3";
import Boxes4 from "./components/boxes/boxes4/Boxes4";
import Boxes5 from "./components/boxes/boxes5/Boxes5";
import Header from "./components/header/Header";
// import Main from "./components/main/Main";
import Main2 from "./components/main2/Main2";
import Main3 from "./components/main3/Main3";
import Main4 from "./components/main4/Main4";

function App() {
  return (
    <>
      <div>
        <Header />
        {/* <Main /> */}
        <Main2 />
        <Main3 />
        <Main4 />
        <Boxes2 />
        <Boxes3 />
        <Boxes4 />
        <Boxes5 />
      </div>
    </>
  );
}

export default App;
