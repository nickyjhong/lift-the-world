import axios from "axios";
import { TOKEN } from "./auth";
import { _setWorkout } from "./workout";

// ACTION TYPES
const SET_WORKOUT_LIST = "SET_WORKOUT_LIST";
const SET_PREV_WORKOUT_SET = "SET_PREV_WORKOUT_SET";
const SET_ALL_WORKOUTS = "SET_ALL_WORKOUTS";
const UPDATE_WORKOUT_LIST = "UPDATE_WORKOUT_LIST";
const ADD_SINGLE_SET = "ADD_SINGLE_SET";
const GET_CURRENT_WORKOUT = "GET_CURRENT_WORKOUT";
const INCREMENT = "INCREMENT";

// ACTION CREATORS
export const _setWorkoutlist = (workoutlist) => {
  return {
    type: SET_WORKOUT_LIST,
    workoutlist,
  };
};

export const _setAllWorkouts = (workoutlist) => {
  return {
    type: SET_ALL_WORKOUTS,
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

const _addSingleSet = (emptySet) => {
  return {
    type: ADD_SINGLE_SET,
    emptySet,
  };
};

const _setCurrentWorkout = (workout) => {
  return {
    type: GET_CURRENT_WORKOUT,
    workout,
  };
};

const _increment = () => {
  console.log("increment");
  return {
    type: INCREMENT,
    increment: Math.floor(Math.random() * 10000),
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

export const fetchPrevWorkoutSet = (exerciseId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/workoutlist/prev/${exerciseId}`);
      dispatch(await _setPrevWorkoutSet(data));
    } catch (error) {
      console.log("setPrevWorkoutSet Error", error);
    }
  };
};

export const fetchAllWorkoutlist = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get("/api/workoutlist", {
          headers: {
            authorization: token,
          },
        });
        console.log("help", data);
        dispatch(_setAllWorkouts(data));
      }
    } catch (error) {
      console.log("getting all workoutlist error", error);
    }
  };
};

// FETCHES
export const fetchWorkouts = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get("/api/workoutlist/current", {
          headers: {
            authorization: token,
          },
        });
        dispatch(await _setCurrentWorkout(data));
      }
    } catch (error) {
      console.log("setWorkoutlist Error", error);
    }
  };
};

// export const finishWorkout = (workout) => {
//   return async (dispatch) => {
//     try {
//       const token = window.localStorage.getItem(TOKEN);
//       if (token) {
//         const { data } = await axios.put(`/api/workout/finish`, workout, {
//           headers: {
//             authorization: token
//           }
//         })
//         dispatch(_updateWorkout(data))
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

export const addSet = (emptySet) => {
  console.log("argument add set exercise thunk", emptySet);
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
        console.log("data in set exercise thunk", data);
        dispatch(_updateWorkoutlist(data, emptySet));
        dispatch(_increment());
      }
    } catch (err) {
      console.log(err);
    }
  };
};

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
  allExercises: [],
  count: 0,
};

export default function workoutlistReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_WORKOUTS:
      return { ...state, allExercises: action.workoutlist };
    case UPDATE_WORKOUT_LIST:
      return { ...state };
    case SET_PREV_WORKOUT_SET:
      return action.exercise;
    case GET_CURRENT_WORKOUT:
      return action.workout;
    case INCREMENT:
      return { ...state, count: action.increment };
    default:
      return state;
  }
}
