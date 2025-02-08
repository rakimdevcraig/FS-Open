function List(props) {
  const filtered = props.list.filter((person) =>
    props.nameSearch === ""
      ? person
      : person.name.toLowerCase().includes(props.nameSearch.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filtered.map((person, id) => (
          <p key={id}>
            {person.name}&nbsp;
            {person.number}
          </p>
        ))}
      </ul>
    </div>
  );
}
export default List;
