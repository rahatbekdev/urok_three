import Text from "../text/Text";
import Title from "../title/Title";
import mainStyle from "./Main2.module.css";
import image2 from "../image_1/christopher.png";
import Images from "../../ff/Images";

const Main2 = () => {
  return (
    <div className={mainStyle.main2}>
      <div className={mainStyle.boxOne}>
        <div className={mainStyle.thriveGroup}>
          <Title titleName={mainStyle.thriveName} textH1="Why Thrive ?" />
          <div className={mainStyle.thrive}>
            <Text
              classText={mainStyle.thriveText}
              text="Want to improve your well-being from the comfort
         of your own couch? Are you having trouble finding
          the right therapist?  Here at ThriveTalk, our licensed
           therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone.
            Become your best self with ThriveTalk.  Start therapy now with a 
            licensed therapist!"
            />
          </div>
        </div>
      </div>
      {/* <img src={image2} alt="" /> */}
      <Images classImage={mainStyle.image2} src={image2} />
    </div>
  );
};

export default Main2;
