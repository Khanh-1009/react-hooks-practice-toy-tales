import React, { useState } from "react";

function ToyForm({onSubmitNewToy}) {
  const [toyName, setToyName] = useState("")
  const [toyImage, setToyImage] = useState("")

  function handleToyNameChange(e){
    console.log(e.target.value)
    setToyName(e.target.value)
    console.log(e.target.value)
  }

  function handleToyImageChange(e){
    setToyImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
      })
    })
    .then(res => res.json())
    .then(data => {
      onSubmitNewToy(data)
      setToyName("")
      setToyImage("")
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleToyNameChange}
          value={toyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleToyImageChange}
          value={toyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
