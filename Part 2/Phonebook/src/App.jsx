import { useEffect, useState } from "react";
import List from "./Components/List";
import Search from "./Components/Search";
import Form from "./Components/Form";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  const addName = (e) => {
    e.preventDefault();
    const nameArray = persons.map((person) => person.name);
    const nameObject = {
      name: newName,
      number: String(newNumber),
    };
    nameArray.includes(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(nameObject));
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNameSearchChange = (e) => {
    const lowerCase = e.target.value;
    setNameSearch(lowerCase);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        nameSearch={nameSearch}
        handleNameSearchChange={handleNameSearchChange}
      />
      <h2>Add a new</h2>
      <Form
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <List list={persons} nameSearch={nameSearch} />
    </div>
  );
};

{
  /* <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */
}
export default App;
