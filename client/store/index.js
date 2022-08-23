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

const reducer = combineReducers({
  auth: auth,
  singleExercise: singleExerciseReducer,
  workout: workoutReducer,
  topUsers: leadersReducer,
  allExercises: exercisesReducer,
<<<<<<< HEAD
=======
  allUsers: usersReducer,
>>>>>>> 70f374c574ac0dc235b4a82a3343da12983ecf0b
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
