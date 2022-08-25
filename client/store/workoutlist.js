import axios from "axios";
import { TOKEN } from "./auth";

// ACTION TYPES
const SET_WORKOUT_LIST = "SET_WORKOUT_LIST";
const UPDATE_WORKOUT_LIST = "UPDATE_WORKOUT_LIST";

// ACTION CREATORS
export const _setWorkoutlist = (workoutlist) => {
  return {
    type: SET_WORKOUT_LIST,
    workoutlist,
  };
};

export const _updateWorkoutlist = (exercise) => {
  return {
    type: UPDATE_WORKOUT_LIST,
    exercise,
  };
};

// THUNKS
export const fetchWorkoutlist = (exerciseId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/api/workoutlist/current/${exerciseId}`
      );
      dispatch(_setWorkoutlist(data));
    } catch (error) {
      console.log("getWorkoutlist Error", error);
    }
  };
};

export const addSet = (exercise) => {
  console.log("argument add set exercise thunk", exercise);
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.put(
          `/api/workoutlist/${exercise.id}`,
          exercise,
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("data in set exercise thunk", data);
        dispatch(_updateWorkoutlist(data, id));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
const initialState = [];

export default function workoutlistReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUT_LIST:
      return action.workoutlist;
    case UPDATE_WORKOUT_LIST:
      return { ...action.exercise, workoutlist: action.exercise };
    default:
      return state;
  }
}
