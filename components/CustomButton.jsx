import style from "./CustomButton.module.css";

const CustomButton = ({ title }) => {
  return (
    <button className={style.button}>
      <span className={style.span}>{title}</span>
    </button>
  );
};

export default CustomButton;

{
  /* <button className={style.button}>
<span className={style.button_lg}>
  <span className={style.button_sl}></span>
  <span className={style.button_text}>Download Now</span>
</span>
</button> */
}
