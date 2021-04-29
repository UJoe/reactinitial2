import React, { useState } from "react";

const Pet = ({ pet }) => {
  const [btn, setBtn] = useState(`${pet.isVaccinated}`);

  const changeVacc = () => {
    setBtn("...");
    fetch("api/pets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pet.name,
        isVaccinated: pet.isVaccinated ? false : true,
      }),
    })
      //.then((res) => setBtn(`${newVacc}`))
      .then((res) => {
        pet.isVaccinated = pet.isVaccinated ? false : true;
        setBtn(`${pet.isVaccinated}`);
      })
      .catch((err) => console.error(err))
      .finally(() => console.log(pet));
  };

  return (
    <div className="Pet">
      <span>{pet.name} - Vaccinated: </span>
      <button onClick={changeVacc}>{btn}</button>
    </div>
  );
};

export default Pet;
