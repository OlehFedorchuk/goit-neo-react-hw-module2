import css from "./Options.module.css";
import clsx from "clsx";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={clsx(css.btnWrapper)}>
      <button className={clsx(css.btn)} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={clsx(css.btn)}
        onClick={() => updateFeedback("netural")}
      >
        Netural
      </button>
      <button className={clsx(css.btn)} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(css.btn)} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
