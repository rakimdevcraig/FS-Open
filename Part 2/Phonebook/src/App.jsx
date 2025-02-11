import { useEffect, useState } from "react";
import List from "./Components/List";
import Search from "./Components/Search";
import Form from "./Components/Form";
import phoneNumberServices from "./services/phoneNumberServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const hook = () => {
    phoneNumberServices.getAll().then((response) => {
      setPersons(response);
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
    if (nameArray.includes(newName)) {
      console.log("exists edit it");
      const entryToEdit = persons.find((person) => person.name === newName);
      const editedEntry = {
        ...entryToEdit,
        number: String(newNumber),
      };
      const listEdited = persons.map((p) => {
        return p.name === editedEntry.name &&
          confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
          ? editedEntry
          : p;
      });

      phoneNumberServices
        .update(editedEntry.id, editedEntry)
        .then((returnedEntry) => {
          console.log(returnedEntry);
          setPersons(listEdited);
        });
    } else {
      phoneNumberServices.create(nameObject).then((response) => {
        setPersons(persons.concat(nameObject));
      });
    }
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

  const handleDelete = (id, name) => {
    const nonDeleted = persons.filter((person) => id !== person.id);

    confirm(`Delete ${name}?`)
      ? phoneNumberServices.remove(id).then(() => {
          setPersons(nonDeleted);
        })
      : null;
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
      <List
        list={persons}
        nameSearch={nameSearch}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
