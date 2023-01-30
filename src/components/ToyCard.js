import React from "react";

function ToyCard({toy, onDeleteClick}) {
  const {name, image, likes} = toy

  function handleDeleteToy(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onDeleteClick(toy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
