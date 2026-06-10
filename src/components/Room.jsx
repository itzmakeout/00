import React from "react";
import "./Room.css";

const Room = () => {
  const handleDogClick = () => {
    alert("Playing dog video!");
    // Trigger the dog video lightbox or modal
  };

  return (
    <div className="room">
      <h1>My Room</h1>
      <div className="dog" onClick={handleDogClick}>
        <img src="/assets/rottweiler.jpg" alt="Rottweiler Dog" />
        <p>Click the dog!</p>
      </div>
    </div>
  );
};

export default Room;