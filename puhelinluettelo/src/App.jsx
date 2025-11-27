import { useState } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = (props) => {
  const [persons, setPersons] = useState(props.numbers);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  console.log(persons);

  const addName = (event) => {
    event.preventDefault();
    if (newName == "" || newNumber == "") {
      console.log(`Invalid name/number`);
      return;
    }
    if (persons.some((person) => person.content == newName)) {
      console.log(`${newName} is already added to phonebook`);
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if (persons.some((person) => person.number == newNumber)) {
      console.log(`${newNumber} is already added to phonebook`);
      alert(`${newNumber} is already added to phonebook`);
      return;
    }
    const nameObject = {
      id: newName,
      content: newName,
      number: newNumber,
      important: Math.random() > 0.5,
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
    console.log("button clicked", event.target);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const contactsToShow = showAll
    ? persons
    : persons.filter((person) => person.important);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setShowAll={setShowAll} showAll={showAll} />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {contactsToShow.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
