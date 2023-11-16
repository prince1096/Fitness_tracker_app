// fetch Exercises

export const fetchExerciseActionCreator = () => async (dispatch) => {
  try {
    const exerciseJson = await fetch(
      "https://fitness-tracker-backend.princeraj43.repl.co/exercises"
    );
    const exerciseObject = await exerciseJson.json();
    console.log(exerciseObject);
    dispatch({ type: "FETCH_EXCERCISE", payload: exerciseObject.data });
  } catch (error) {
    console.error("Error while fetching exercise data:", error);
  }
};

// Fetch Foods

export const fetchFoodActionCreator = () => async (dispatch) => {
  try {
    const foodJson = await fetch(
      "https://fitness-tracker-backend.princeraj43.repl.co/foods"
    );
    const foodObject = await foodJson.json();
    // console.log(foodObject);
    dispatch({ type: "FETCH_FOOD", payload: foodObject.data });
  } catch (error) {
    console.error("Error while fetching food data:", error);
  }
};

// Fetch Foods

export const fetchGoalActionCreator = () => async (dispatch) => {
  try {
    const goalJson = await fetch(
      "https://fitness-tracker-backend.princeraj43.repl.co/fitness"
    );
    const goalObject = await goalJson.json();
    dispatch({ type: "FETCH_GOAL", payload: goalObject.data });
  } catch (error) {
    console.error("Error while fetching goal data:", error);
  }
};

// Add Food

export const postFoodActionCreator = (foodData) => async (dispatch) => {
  try {
    const feedFoodData = await fetch(
      "https://fitness-tracker-backend.princeraj43.repl.co/foods",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
      }
    );
    const feedFoodDataObject = await feedFoodData.json();
    dispatch({ type: "ADD_FOOD", payload: feedFoodDataObject.data });
  } catch (error) {
    console.error("Error while feeding food data:", error);
  }
};

// Add Fitness

export const postGoalActionCreator = (goalData) => async (dispatch) => {
  try {
    const feedGoalData = await fetch(
      "https://fitness-tracker-backend.princeraj43.repl.co/fitness",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goalData),
      }
    );
    const feedGoalDataObject = await feedGoalData.json();

    dispatch({ type: "ADD_GOAL", payload: feedGoalDataObject.data });
  } catch (error) {
    console.error("Error while feeding goal data:", error);
  }
};

// Add Exercise

export const postExerciseActionCreator = (exerciseData) => async (dispatch) => {
  try {
    const feedExerciseData = await fetch(
      "https://assignment17fitnesstracker.allahabad.repl.co/api/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exerciseData),
      }
    );
    const feedExerciseDataObject = await feedExerciseData.json();
    dispatch({
      type: "ADD_EXCERCISE",
      payload: feedExerciseDataObject.data,
    });
  } catch (error) {
    console.error("Error while feeding exercise data:", error);
  }
};

// Delete Exercise

export const deleteExerciseActionCreator = (exercise) => async (dispatch) => {
  console.log(exercise?._id);
  try {
    const feedExerciseData = await fetch(
      `https://fitness-tracker-backend.princeraj43.repl.co/exercises/${exercise?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const feedExerciseDataObject = await feedExerciseData.json();
    console.log(feedExerciseDataObject.data);
    dispatch({
      type: "REMOVE_EXERCISE",
      payload: feedExerciseDataObject.data,
    });
  } catch (error) {
    console.error("Error while deleting exercise data:", error);
  }
};

// Delete Fitness Goal

export const deleteGoalActionCreator = (fitness) => async (dispatch) => {
  const ans = fitness?._id;
  try {
    const feedGoalData = await fetch(
      `https://fitness-tracker-backend.princeraj43.repl.co/fitness/${ans}`,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const feedGoalDataObject = await feedGoalData.json();
    dispatch({ type: "REMOVE_GOAL", payload: feedGoalDataObject.data });
  } catch (error) {
    console.error("Error while deleting goal data:", error);
  }
};

// Delete Food

export const deleteFoodActionCreator = (food) => async (dispatch) => {
  try {
    const feedFoodData = await fetch(
      `https://fitness-tracker-backend.princeraj43.repl.co/foods/${food?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const feedFoodDataObject = await feedFoodData.json();
    dispatch({ type: "REMOVE_FOOD", payload: feedFoodDataObject.data });
  } catch (error) {
    console.error("Error while deleting food data:", error);
  }
};
