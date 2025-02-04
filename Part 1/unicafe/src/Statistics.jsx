import StatisticLine from "./StatisticLine.jsx";

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
export default Statistics;
