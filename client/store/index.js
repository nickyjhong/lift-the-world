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
import singleWorkoutReducer from "./singleWorkout";
import singleUserReducer from "./singleUser";
import previousReducer from "./previous";
import workoutlistReducer from "./workoutlist";
import spritesReducer from "./sprites";
import selectedSpriteReducer from "./updateSelectedSprite";

const reducer = combineReducers({
  auth: auth,

  workout: workoutReducer,
  singleWorkout: singleWorkoutReducer,
  previous: previousReducer,
  workoutlist: workoutlistReducer,

  allExercises: exercisesReducer,
  singleExercise: singleExerciseReducer,

  topUsers: leadersReducer,
  allUsers: usersReducer,
  singleUser: singleUserReducer,

  sprites: spritesReducer,
  selectedSprite: selectedSpriteReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
