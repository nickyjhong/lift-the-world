import axios from "axios";
import { TOKEN } from "./auth";
import { _setWorkout } from "./workout";

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
      dispatch(await _setWorkout(data));
      dispatch(await _setWorkoutlist(exerciseId));
    } catch (error) {
      console.log("getWorkoutlist Error", error);
    }
  };
};

export const confirmSet = (setData) => {
  console.log("argument add set exercise thunk", setData);
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.put(
          `/api/workoutlist/${setData.exerciseId}`,
          setData,
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log("data in set exercise thunk", data);
        dispatch(_updateWorkoutlist(data, setData));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
const initialState = {};

export default function workoutlistReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUT_LIST:
      return action.workoutlist;
    case UPDATE_WORKOUT_LIST:
      return { ...action.exercise, exercise: action.exercise };
    default:
      return state;
  }
}
