import React from "react";
import { useNavigate } from "react-router-dom";
import "./LivingRoom.css";

const LivingRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="living-room">
      <h1>Living Room</h1>
      <div className="rooms-navigation">
        <div className="room-door" onClick={() => navigate("/room")}>
          <p>Go to My Room</p>
        </div>
        <div className="room-door" onClick={() => navigate("/studio")}>
          <p>Go to Studio</p>
        </div>
        <div className="room-door" onClick={() => navigate("/gaming-room")}>
          <p>Go to Gaming Room</p>
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;