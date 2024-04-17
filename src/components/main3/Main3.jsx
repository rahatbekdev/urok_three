import Text from "../text/Text";
import Title from "../title/Title";
import main3 from "./Main3.module.css";

const Main3 = () => {
  return (
    <div className={main3.boxGroup3}>
      <Title titleName={main3.text3} textH1="ABOUT US" />
      <div>
        <div>
          <Text classText={main3.box3}
            text="We want to help you thrive! Whether you are just
         looking for someone to talk to, or are struggling with a
          mental wellness issue we’re here to help. Our highly
           talented therapists can help you with a range of issues
            including relationships, sex, PTSD, depression, social
             anxiety, or even just caring for yourself more."
          />
        </div>
        <Title titleName={main3.text4} textH1="WE CAN HELP YOU WITH" />
      </div>
    </div>
  );
};

export default Main3;
