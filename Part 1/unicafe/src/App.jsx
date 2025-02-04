import { useState } from "react";
import Button from "./Button.jsx";
import Statistics from "./Statistics.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAverage] = useState(0);

  const handleGoodVotes = () => {
    setGood((prevGood) => prevGood + 1);
    setTotal((prevTotal) => prevTotal + 1);
    setAverage((prevAvg) => prevAvg + 1);
  };

  const handleNeutralVotes = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
    setTotal((prevTotal) => prevTotal + 1);
  };

  const handleBadVotes = () => {
    setBad((prevBad) => prevBad + 1);
    setTotal((prevTotal) => prevTotal + 1);
    setAverage((prevAvg) => prevAvg - 1);
  };

  return (
    <div>
      <h1>Give Feedback (Your vote counts!)</h1>
      <Button onClick={handleGoodVotes} buttonText="Good Vote" />
      <Button onClick={handleNeutralVotes} buttonText="Neutral Vote" />
      <Button onClick={handleBadVotes} buttonText="Bad Vote" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        avg={avg}
        total={total}
      />
    </div>
  );
};

export default App;
