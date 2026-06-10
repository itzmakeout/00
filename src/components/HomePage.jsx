import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCarClick = () => {
    alert("Playing BMW E30 video!");
    // Here you would launch your lightbox/player for the video.
  };

  const handleDoorClick = () => {
    navigate("/living-room");
  };

  return (
    <div className="homepage">
      <div className="house">
        <img
          src="/assets/house.jpg"
          alt="Tokyo Style House"
          className="house-image"
        />
        <div className="car" onClick={handleCarClick}>
          {/* BMW Positioned */}
          <img src="/assets/bmw-e30.jpg" alt="BMW E30" />
        </div>
        <div className="door" onClick={handleDoorClick}>
          <p>Click to Enter</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;