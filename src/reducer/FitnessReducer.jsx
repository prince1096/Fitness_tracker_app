const initialState = {
  exercises: [],
  goal: [],
  foods: [],
};

const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXCERCISE":
      return {
        ...state,
        exercises: [...action.payload],
      };
    case "FETCH_GOAL":
      return {
        ...state,
        goal: [...action.payload],
      };
    case "FETCH_FOOD":
      return {
        ...state,
        foods: [...action.payload],
      };
    case "ADD_EXCERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "ADD_GOAL":
      return {
        ...state,
        goal: [...state.goal, action.payload],
      };
    case "ADD_FOOD":
      return {
        ...state,
        foods: [...state.foods, action.payload],
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises?.filter(
          (item) => item?._id !== action.payload?._id
        ),
      };
    case "REMOVE_GOAL":
      return {
        ...state,
        goal: state.goal?.filter((item) => item._id !== action.payload?._id),
      };
    case "REMOVE_FOOD":
      return {
        ...state,
        foods: state.foods?.filter((item) => item?._id !== action.payload?._id),
      };
    default:
      return { ...state };
  }
};

export default fitnessReducer;
