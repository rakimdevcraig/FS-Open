function Search(props) {
  return (
    <div>
      Filter shown with{" "}
      <input value={props.nameSearch} onChange={props.handleNameSearchChange} />
    </div>
  );
}
export default Search;
