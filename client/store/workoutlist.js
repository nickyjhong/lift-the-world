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

export const _updateWorkoutlist = (workoutlist) => {
  return {
    type: UPDATE_WORKOUT_LIST,
    workoutlist,
  };
};

// THUNKS
export const fetchWorkoutlist = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/workoutlist/${id}`);
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
          {
            exerciseId: exercise.id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("data in set exercise thunk", data);
        dispatch(_updateWorkoutlist(data));
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
      return action.workoutlist;
    default:
      return state;
  }
}
