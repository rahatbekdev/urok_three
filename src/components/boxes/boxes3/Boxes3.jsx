import Text from "../../text/Text";
import Title from "../../title/Title";
import boxes3 from "./Boxes3.module.css";

const Boxes3 = () => {
  return (
    <div className={boxes3.f3}>
      <div className={boxes3.f5}>
        <Title titleName={boxes3.titleF1} textH1="Nutritional Plans" />
        <Text
          classText={boxes3.textBox}
          text="Nutritional Facts on some shitty things that
       you don’t care about and even we don’t , 
       I need to replace this copy."
        />
      </div>
      <div className={boxes3.f5}>
        <Title titleName={boxes3.titleF1} textH1="Weight Loss" />
        <Text classText={boxes3.textBox}
          text="Nutritional Facts on some shitty things that you
         don’t care about and even we don’t , I need to replace this copy."
        />
      </div>
      <div className={boxes3.f5}>
        <Title titleName={boxes3.titleF1} textH1="Mental Peace" />
        <Text classText={boxes3.textBox}
          text="Nutritional Facts on some shitty things that you don’t care 
        about and even we don’t , I need to replace this copy."
        />
      </div>
      <div className={boxes3.f5}>
        <Title titleName={boxes3.titleF1} textH1="Home Training" />
        <Text classText={boxes3.textBox}
          text="Nutritional Facts on some shitty things that you don’t care about and
         even we don’t , I need to replace this copy."
        />
      </div>
      <div className={boxes3.f5}>
        <Title titleName={boxes3.titleF1} textH1="Work/Life Balance" />
        <Text classText={boxes3.textBox}
          text="Nutritional Facts on some shitty things that you don’t care about 
        and even we don’t , I need to replace this copy."
        />
      </div>
      <div className={boxes3.f5}>
        <Title titleName={boxes3.titleF1} textH1="Cardio" />
        <Text classText={boxes3.textBox}
          text="Nutritional Facts on some shitty things that you don’t care about and
         even we don’t , I need to replace this copy."
        />
      </div>
    </div>
  );
};

export default Boxes3;
