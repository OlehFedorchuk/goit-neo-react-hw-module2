import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const initialFeedback = () => {
    const saved = localStorage.getItem("save-feedback-count");
    return saved
      ? JSON.parse(saved)
      : {
          good: 0,
          netural: 0,
          bad: 0,
        };
  };
  const [feedbackType, setfeedbackType] = useState(initialFeedback);

  const updateFeedback = (type) => {
    setfeedbackType((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };
  const resetFeedback = () => {
    setfeedbackType({
      good: 0,
      netural: 0,
      bad: 0,
    });
  };
  const totalFeedback =
    feedbackType.good + feedbackType.netural + feedbackType.bad;

  const positiveFeedback = Math.round(
    (feedbackType.good / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("save-feedback-count", JSON.stringify(feedbackType));
  }, [feedbackType]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          {...feedbackType}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
