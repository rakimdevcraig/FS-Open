import Part from "./Part.jsx";

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.courses[0].name}
        exercises={props.courses[0].exercises}
      />
      <Part
        part={props.courses[1].name}
        exercises={props.courses[1].exercises}
      />
      <Part
        part={props.courses[2].name}
        exercises={props.courses[2].exercises}
      />
    </div>
  );
};

export default Content;
