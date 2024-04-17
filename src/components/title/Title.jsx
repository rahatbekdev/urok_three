/* eslint-disable react/prop-types */
// import title from "./Title.module.css";

const Title = (props) => {
  return (
    <>
      <h1 className={props.titleName}>{props.textH1}</h1>
    </>
  );
};

export default Title;
