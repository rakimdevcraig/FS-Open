const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.courses[0].exercises +
          props.courses[1].exercises +
          props.courses[2].exercises}
      </p>
    </div>
  );
};
export default Total;
