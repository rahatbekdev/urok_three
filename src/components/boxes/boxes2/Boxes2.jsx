import Boxes from "../Boxes";
import boxes2 from "./Boxes2.module.css";

const Boxes2 = () => {
  return (
    <div className={boxes2.f2}>
      <Boxes className={boxes2.boxes1} textH4="Physical Health" />
      <Boxes className={boxes2.boxes2} textH4="Mental Health" />
      <Boxes className={boxes2.boxes3} textH4="Nutrition" />
      <Boxes className={boxes2.boxes4} textH4="Gymnastics" />
      <Boxes className={boxes2.boxes5} textH4="Crossfit" />
      <Boxes className={boxes2.boxes6} textH4="Aerobics" />
    </div>
  );
};

export default Boxes2;
