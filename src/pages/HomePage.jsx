import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExerciseActionCreator,
  fetchFoodActionCreator,
  fetchGoalActionCreator,
} from "../actions/action";

import "./HomePage.css";

const HomePage = () => {
  // return <div>HomePage</div>;

  const exercises = useSelector((state) => state.exercises);
  const foods = useSelector((state) => state.foods);
  const goal = useSelector((state) => state.goal);
  const dispatch = useDispatch();
  // find the latest updated value from user
  const latestExercise = exercises[exercises.length - 1];
  const latestFood = foods[foods.length - 1];
  const latestGoal = goal[goal.length - 1];
  const helperDateFormateConverter = (inputDate) => {
    if (!inputDate) {
      return "";
    }
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    return `${day} ${month.toUpperCase()}`;
  };

  const caloriesGoal = goal?.reduce(
    (acc, curr) => acc + curr?.targetCalories,
    0
  );
  const caloriesConsumed = foods?.reduce(
    (acc, curr) => acc + curr?.calories,
    0
  );
  const caloriesBurned = exercises?.reduce(
    (acc, curr) => acc + curr?.calories,
    0
  );
  useEffect(() => {
    dispatch(fetchExerciseActionCreator());
    dispatch(fetchFoodActionCreator());
    dispatch(fetchGoalActionCreator());
  }, [dispatch]);
  return (
    <div className="dashboard_container">
      <h2>Summary</h2>
      <div className="card_container">
        <div className="card">
          <div className="heading">
            <h3>Latest Exercise</h3>
            <hr />
          </div>
          <div className="exercise_latest_data_container">
            <span>Exercise Name:{latestExercise?.exercise}</span>
            <span>Duration:{latestExercise?.duration}</span>
            <span>Calories Burned:{latestExercise?.calories}</span>
          </div>
        </div>
        <div className="card">
          <div className="heading_food">
            <h3>Latest Food</h3>
            <hr />
          </div>
          <div className="food_latest_data_container">
            <span>Food Name:{latestFood?.name}</span>
            <span>Calories:{latestFood?.calories}</span>
            <span>Protein:{latestFood?.protein}</span>
            <span>Carbohydrates:{latestFood?.carbohydrates}</span>
            <span>Fat:{latestFood?.fat}</span>
          </div>
        </div>
        <div className="card">
          <div className="heading_goal">
            <h3>Latest Goal</h3>
            <hr />
          </div>
          <div className="goal_latest_data_container">
            <span>Goal Name:{latestGoal?.goalName}</span>
            <span>
              Target Date:{helperDateFormateConverter(latestGoal?.targetDate)}
            </span>
            <span>Target Calories:{latestGoal?.targetCalories}</span>
            <span>Status:{latestGoal?.status}</span>
          </div>
        </div>
      </div>
      <div className="fitness_summary">
        <h4>Total Calories Burned:{caloriesBurned}</h4>
        <h4>Total Calories Consumed:{caloriesConsumed}</h4>
        <h4>Total Calories Goal:{caloriesGoal}</h4>
        <h4>
          Remaining Calories to Goal:
          {caloriesGoal - (caloriesConsumed + caloriesBurned)}
        </h4>
      </div>
    </div>
  );
};

export default HomePage;
