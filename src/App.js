import "./App.css";
import React, { useState } from "react";
import Client from "./components/Client";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [clients, setClients] = useState([]);

  const getdata = () => {
    setLoading(true);
    fetch(`api/clients?search=${value}`)
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => setClients(null))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Veterinarian admin -clients</h1>
      <div id="searchBar">
        <input
          id="isearch"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={value.length < 3} onClick={getdata}>
          Submit
        </button>
      </div>
      <div id="clients">
        {clients && loading === false
          ? clients.map((cli, index) => <Client key={index} cli={cli} />)
          : ""}
      </div>
    </div>
  );
};

export default App;
