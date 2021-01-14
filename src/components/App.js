import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  console.log(filters)

  function handleFindPetsClick() {
    if (filters.type === "all") {
      return fetch("http://localhost:3001/pets")
        .then(response => response.json())
        .then(data => {
          setPets(data)
        })
    } else if (filters.type === "cat") {
      return fetch("http://localhost:3001/pets?type=cat")
        .then(response => response.json())
        .then(data => {
          setPets(data)
        })
    } else if (filters.type === "dog") {
      return fetch("http://localhost:3001/pets?type=dog")
        .then(response => response.json())
        .then(data => {
          setPets(data)
        })
    } else {
      return fetch("http://localhost:3001/pets?type=micropig")
        .then(response => response.json())
        .then(data => {
          setPets(data)
        })
    }
  }

  function handleChangeType(type){
    setFilters({ type: type })
  }

  function onAdoptPet(petId) {
    const updatedPets = pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
