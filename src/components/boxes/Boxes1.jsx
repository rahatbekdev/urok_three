import Boxes from "./Boxes";
import boxes from "./Boxes.module.css";

const Boxes1 = () => {
  return (
    <div className={boxes.boxesGroup}>
      <Boxes className={boxes.boxes1} textH4="Weight Lifting" classDiv={boxes.box1}/>
      <Boxes className={boxes.boxes2} textH4="Running & Spinning"/>
      <Boxes className={boxes.boxes3} textH4="Pumping Iron"/>
      <Boxes className={boxes.boxes4} textH4="Pumping Iron"/>
    </div>
  );
};

export default Boxes1;
