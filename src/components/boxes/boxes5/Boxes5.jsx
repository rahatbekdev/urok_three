import Images from "../../../ff/Images";
import Button from "../../UI/button/Button";
import Text from "../../text/Text";
import Title from "../../title/Title";
import boxes5 from "./Boxes5.module.css";
import img2 from '../../image_1/b2.png'

const Boxes5 = () => {
  return (
    <div className={boxes5.box5}>
      <div>
        <Title titleName={boxes5.title5} textH1="CONTACT US" />
        <Title titleName={boxes5.title6} textH1="Ready. Set. Smile" />
        <Text 
          classText={boxes5.text5}
          text="Take the free online assessment 
      to see if you are a candidate and get started on your journey."
        />
        <Button classBtn={boxes5.btn5} btnName="GET HELP NOW" />
      </div>
      <div>
        <Images classImage={boxes5.img5} src={img2}/>
      </div>
    </div>
  );
};

export default Boxes5;
