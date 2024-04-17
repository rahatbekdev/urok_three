import Button from "../UI/button/Button";
import Title from "../title/Title";
import styles from "./Header.module.css";
// import mark from "../image_1/Mask Group.png";
import Main from "../main/Main";

const Header = () => {
  return (
    <div className={styles.headerBox}>
      <div className={styles.headerBody}>
        {/* <img className={styles.imgMask} src={mark} alt="" /> */}
        <div>
          <Title titleName={styles.titleHeader} textH1="Thrivetalk"/>
        </div>
        <div className={styles.headerUl}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <Button classBtn={styles.headerBtn} btnName="CONTACT US" />
        </div>
      </div>
      <Main/>
    </div>
  );
};

export default Header;
