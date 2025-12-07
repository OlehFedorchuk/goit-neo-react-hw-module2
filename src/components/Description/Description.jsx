import css from "./Description.module.css";
import clsx from "clsx";
const Description = () => {
  return (
    <>
      <h1 className={clsx(css.description)}>Sip Happens Café</h1>
      <p className={clsx(css.description)}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
