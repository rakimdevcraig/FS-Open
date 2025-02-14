import { useEffect, useState } from "react";
import List from "./Components/List";
import Search from "./Components/Search";
import Form from "./Components/Form";
import phoneNumberServices from "./services/phoneNumberServices";
import Notification from "./Components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [notificationMsg, setNotificationMsg] = useState(null);

  const hook = () => {
    phoneNumberServices.getAll().then((response) => {
      setPersons(response);
    });
  };
  useEffect(hook, []);

  const addName = (e) => {
    e.preventDefault();
    //Should I wrap the update & the create new into their own functions and then
    //persontoUpdate !== undefined ? update function : add function
    const filteredNameList = persons.filter(
      (person) => person.name === newName
    );
    const personToUpdate = filteredNameList[0];
    const personUpdated = { ...personToUpdate, number: newNumber };
    //can i do if(personToUpdate)?
    if (personToUpdate !== undefined) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phoneNumberServices
          .update(personUpdated.id, personUpdated)
          .then((updatedEntry) => {
            setNotificationMsg(` ${personUpdated.name} was Updated`);
            setTimeout(() => {
              setNotificationMsg(null);
            }, 5000);
            // better to do the map in a variable and
            // then set the state with that variable?
            const listWithEdit = persons.map((person) =>
              person.id === updatedEntry.id ? updatedEntry : person
            );
            setPersons(listWithEdit);
          })
          .catch((error) => {
            console.log(error);
            setPersons(
              persons.filter((person) => person.id !== personUpdated.id)
            );
            setNotificationMsg(
              ` ${personUpdated.name} was already deleted from server`
            );
            setTimeout(() => {
              setNotificationMsg(null);
            }, 5000);
          });
      }
    } else {
      const newEntry = {
        name: newName,
        number: String(newNumber),
      };
      phoneNumberServices
        .create(newEntry)
        .then((returnedEntry) => {
          console.log(returnedEntry);
          setNotificationMsg(` ${newEntry.name} was Updated`);
          setTimeout(() => {
            setNotificationMsg(null);
          }, 5000);
          const listWithNewItem = persons.concat(returnedEntry);
          setPersons(listWithNewItem);
        })
        .catch((err) => {
          console.log(err);
          setNotificationMsg(` ${err.response.data.error}`);
          setTimeout(() => {
            setNotificationMsg(null);
          }, 5000);
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
      <Notification message={notificationMsg} />
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
