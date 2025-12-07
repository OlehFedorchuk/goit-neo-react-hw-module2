import css from "./Notification.module.css";
import clsx from "clsx";

const Notification = () => {
  return (
    <>
      <p className={clsx(css.mussingFidback)}>Not feedback yet</p>
    </>
  );
};
export default Notification;
