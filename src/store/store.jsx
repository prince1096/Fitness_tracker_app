import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import fitnessReducer from "../reducer/FitnessReducer";

const store = createStore(fitnessReducer, applyMiddleware(thunk));

export default store;
