import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAverage] = useState(0);
  // const avg = good + bad + neutral / 3;
  // const positive = good / total;

  const handleGoodVotes = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(avg + 1);
  };
  // console.log(good);

  const handleNeutralVotes = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadVotes = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(avg - 1);
  };

  const log = () => {
    console.log(avg);
  };

  return (
    <div>
      <h1>Give Feedback (Your vote counts!)</h1>
      {/* <StatisticLine text="Good" value={good} /> */}
      <Button onClick={handleGoodVotes} buttonText="Good Vote" />
      {/* <StatisticLine text="Neutral" value={neutral} /> */}
      <Button onClick={handleNeutralVotes} buttonText="Neutral Vote" />
      {/* <StatisticLine text="Bad" value={bad} /> */}
      <Button onClick={handleBadVotes} buttonText="Bad Vote" />
      {/* <StatisticLine text="Total" value={total} total={total} />
      <StatisticLine text="Average" value={avg / total} />
      <StatisticLine text="Positive" value={good / total} /> */}
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

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.value}</p>
    </div>
  );
};

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback is available please cast a vote.</p>
      </div>
    );
  }

  return (
    <div>
      {/* 
      <StatisticLine text="Positive" value={`${props.good / props.total} %`} /> */}
      <table>
        <tbody>
          <tr>
            <th>Vote Type</th>
            <th>Votes</th>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Good" />
            </td>
            <td>
              <StatisticLine value={props.good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Neutral" />
            </td>
            <td>
              <StatisticLine value={props.neutral} />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <StatisticLine text="Bad" />
            </td>
            <td>
              {" "}
              <StatisticLine value={props.bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Total" />
            </td>
            <td>
              <StatisticLine value={props.total} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Average" />
            </td>
            <td>
              <StatisticLine value={props.avg / props.total} />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="Positive" />
            </td>
            <td>
              <StatisticLine value={`${props.good / props.total} %`} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
