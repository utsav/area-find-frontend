import React, { useState } from "react";
import { findAreaApi } from "./utils";
import "./App.css";

const App = () => {
  const [area, setArea] = useState("");
  const [foundAreaName, setFoundAreaName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setFoundAreaName("");
    setIsLoading(true);

    if (area.trim() === "") return;

    try {
      const data = await findAreaApi({ areaName: area });
      if (data && data.foundAreaName) {
        setFoundAreaName(data.foundAreaName);
      }
    } catch (e) {
      console.log("e", e);
    }

    setIsLoading(false);
  };

  const handleInputChange = e => {
    setArea(e.target.value);
  };

  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input onChange={handleInputChange} value={area} />
          {!isLoading ? (
            <button type="submit">SUBMIT</button>
          ) : (
            <div>Processing...</div>
          )}
        </div>
      </form>
      {!isLoading && foundAreaName && (
        <span className="area-name">{foundAreaName}</span>
      )}
    </div>
  );
};

export default App;
