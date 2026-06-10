import React from "react";

const Studio = () => {
  const handlePosterClick = () => {
    alert("Playing poster video!");
    // Trigger a modal for the studio video
  };

  return (
    <div className="studio">
      <h1>Studio</h1>
      <div className="poster" onClick={handlePosterClick}>
        <p>Click the Poster</p>
      </div>
    </div>
  );

export default Studio;