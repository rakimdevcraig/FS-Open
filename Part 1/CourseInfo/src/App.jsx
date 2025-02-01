const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.courses[0].name} exercises={props.courses[0].name} />
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

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content courses={course.parts} />
      <Total courses={course.parts} />
    </div>
  );
};

export default App;
