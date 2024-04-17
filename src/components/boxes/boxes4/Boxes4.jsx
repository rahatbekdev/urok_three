import Images from "../../../ff/Images";
import boxes4 from "./Boxes4.module.css";
import imag from "../../image_1/b1.png";
import Title from "../../title/Title";
import Text from "../../text/Text";
import Button from "../../UI/button/Button";

const Boxes4 = () => {
  return (
    <div className={boxes4.s2}>
      <div>
        <Images classImage={boxes4.img4} src={imag} />
      </div>
      <div>
        <Title titleName={boxes4.title4} textH1="YOU SHOULD ALSO KNOW" />
        <Text
          classText={boxes4.text4}
          text="MDD affects more than 16.1 million American
         adults, or about 6.7%of the U.S. population age 18 and older in
          a given year. We at {<Title/>} ThriveTalk can help you."
        />
        <Button classBtn={boxes4.button} btnName="GET HELP NOW" />
      </div>
    </div>
  );
};

export default Boxes4;
