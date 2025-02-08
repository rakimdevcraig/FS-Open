import Part from "./Part";
function Content({ parts }) {
  console.log(parts);
  return (
    <div>
      <ul>
        {parts.parts.map((part) => (
          <li key={part.id}>
            <Part part={part} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
