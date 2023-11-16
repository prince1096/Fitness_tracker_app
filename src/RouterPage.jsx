import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Food from "./pages/Food";
import Exercise from "./pages/Exercise";
import FitnessGoals from "./pages/FitnessGoals";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<Food />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/goals" element={<FitnessGoals />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
