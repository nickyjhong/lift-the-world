import axios from "axios";
import { TOKEN } from "./auth";

// ACTION TYPES
const SET_WORKOUT_LIST = "SET_WORKOUT_LIST";
const SET_PREV_WORKOUT_SET = "SET_PREV_WORKOUT_SET";
const UPDATE_WORKOUT_LIST = "UPDATE_WORKOUT_LIST";

// ACTION CREATORS
export const _setWorkoutlist = (workoutlist) => {
  return {
    type: SET_WORKOUT_LIST,
    workoutlist,
  };
};

export const _setPrevWorkoutSet = (exercise) => {
  return {
    type: SET_PREV_WORKOUT_SET,
    exercise,
  };
};

export const _updateWorkoutlist = (exercise) => {
  return {
    type: UPDATE_WORKOUT_LIST,
    exercise,
  };
};

// THUNKS
// fetch all current exercises in workout list
export const fetchWorkoutlist = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get("/api/workoutlist/current", {
          headers: {
            authorization: token,
          },
        });
        dispatch(await _setWorkoutlist(data));
      }
    } catch (error) {
      console.log("setWorkoutlist Error", error);
    }
  };
};

// fetches previous set of same exercise from last workout
export const fetchPrevWorkoutSet = (exerciseId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(`/api/workoutlist/prev/${exerciseId}`);
        dispatch(await _setPrevWorkoutSet(data));
      }
    } catch (error) {
      console.log("setPrevWorkoutSet Error", error);
    }
  };
};

// add set to current exercise
export const addSet = (emptySet) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.post(
          `/api/workoutlist/${emptySet.exerciseId}`,
          emptySet,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(_updateWorkoutlist(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteSet = (exerciseId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.delete(`/api/workoutlist/${exerciseId}`,{
          headers: {
            authorization: token,
          },
        })
      dispatch(_updateWorkoutlist(data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteFromWorkout = (exerciseId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.delete(`/api/workout/${exerciseId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(await _setWorkoutlist(data));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// updates current set
export const confirmSet = (setData) => {
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
        dispatch(_updateWorkoutlist(data, setData));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
const initialState = {
  allExercises: {},
};

export default function workoutlistReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUT_LIST:
      return { ...state, allExercises: action.workoutlist };
    case UPDATE_WORKOUT_LIST:
      const exercise = state.allExercises.exercises.find(
        (exercise) => exercise.id === action.exercise.exerciseId
      );
      exercise.workoutlist = action.exercise;
      return { ...state };
    case SET_PREV_WORKOUT_SET:
      return action.exercise;
    default:
      return state;
  }
}
