const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.value}</p>
    </div>
  );
};
export default StatisticLine;
