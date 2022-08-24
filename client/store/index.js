import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import singleExerciseReducer from "./singleExercise";
import workoutReducer from "./workout";
import leadersReducer from "./topUsers";
import exercisesReducer from "./exercises";
import usersReducer from "./allUsers";
import presetsReducer from "./presets";
import presetReducer from "./singlePreset";
import singleUserReducer from "./singleUser";

const reducer = combineReducers({
  auth: auth,
  singleExercise: singleExerciseReducer,
  workout: workoutReducer,
  topUsers: leadersReducer,
  allExercises: exercisesReducer,
  allUsers: usersReducer,
  singleUser: singleUserReducer,
  presets: presetsReducer,
  singlePreset: presetReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
