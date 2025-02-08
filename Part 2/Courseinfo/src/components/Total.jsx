function Total({ course }) {
  // const exerciseArray = course.parts.map((item) => item.exercises);
  // const exerciseTotal = exerciseArray.reduce( (acc,cur) => acc + cur, )
  const total = course.parts.reduce((acc, cur) => acc + cur.exercises, 0);
  return <p>Number of exercises {total}</p>;
}
export default Total;
