import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteClick}) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
}

export default ToyContainer;
