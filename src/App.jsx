import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LivingRoom from "./components/LivingRoom";
import Room from "./components/Room";
import Studio from "./components/Studio";
import GamingRoom from "./components/GamingRoom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/room" element={<Room />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/gaming-room" element={<GamingRoom />} />
      </Routes>
    </Router>
  );
};

export default App;