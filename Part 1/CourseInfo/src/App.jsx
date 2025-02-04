import Header from "./Header.jsx";
import Total from "./Total.jsx";
import Content from "./Content.jsx";

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
