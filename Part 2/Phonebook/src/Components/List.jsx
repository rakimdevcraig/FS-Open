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
          <li key={id}>
            {person.name}&nbsp;
            {person.number}&nbsp;
            <button onClick={() => props.handleDelete(person.id, person.name)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
