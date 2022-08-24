import propTypes from "prop-types";
import styles from "./button.module.css";
// react가 css를 js객체로 변환

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
// 랜덤 클래스, 중복 걱정x

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
// style.css 생성 후  index.js에 import하여 사용 ,style prop 사용 <buton bg:"toma"></buton>
// css module사용하여 css파일 활용과 개별적용을 충족
