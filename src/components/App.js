import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleSubmitNewToy(newToy){
    setToys([...toys, newToy])
  }

  function handleDeleteClick(deleteToy){
    const updateToyList = toys.filter((toy) => toy.id !== deleteToy.id)
    setToys(updateToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmitNewToy={handleSubmitNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteClick={handleDeleteClick}/>
    </>
  );
}

export default App;
