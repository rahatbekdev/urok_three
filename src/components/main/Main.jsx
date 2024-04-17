import Text from "../text/Text";
import Title from "../title/Title";
import main from "./Main.module.css";
import mark from "../image_1/Mask Group.png";
import Button from "../UI/button/Button";

const Main = () => {
  return (
    <div className={main.main}>
      <div>
        <Title titleName={main.textMain} textH1="Thrivetalk"/>
        <h2 className={main.textH2}>
          HELPING YOU THRIVE <br />
          IN ALL AREAS OF LIFE
        </h2>
        <div className={main.mainText}>
          <Text
            classText={main.mainBox}
            text="Our highly talented therapist can help you, 
        with a range of issues including relationships,
        sex,PTSD,depression,social anxyety,or even,
        just caring for yourself more.
        "
          />
        </div>
        <img className={main.imgMask} src={mark} alt="" />
      </div>
      <div className={main.btnGroup}>
        <Button classBtn={main.mainBtn} btnName="what do i do" />
        <Button classBtn={main.mainOfBtn} btnName="what do i do" />
      </div>
    </div>
  );
};

export default Main;
