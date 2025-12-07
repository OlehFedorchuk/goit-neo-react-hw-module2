import css from "./Feedback.module.css";
import clsx from "clsx";

const Feedback = ({ good, netural, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={clsx(css.feedBack)}>
      <p>Good: {good}</p>
      <p>Netural: {netural}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback} %</p>
    </div>
  );
};

export default Feedback;
