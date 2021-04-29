import React from "react";
import Pet from "./Pet";

const Client = ({ cli }) => {
  return (
    <div className="Client">
      <h3>{cli.name}</h3>
      <div className="petDiv">
        {cli.pets.map((pet, index) => (
          <Pet key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Client;
