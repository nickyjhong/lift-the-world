import axios from "axios";

// ACTION TYPES
const SET_EXERCISE = "SET_EXERCISE";
const CREATE_EXERCISE = "CREATE_EXERCISE";

// ACTION CREATORS
export const _setExercise = (exercise) => {
  return {
    type: SET_EXERCISE,
    exercise,
  };
};

// THUNKS
export const fetchExercise = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/exercise/${id}`);
      dispatch(_setExercise(data));
    } catch (error) {
      console.log("getSingleExercise Error", error);
    }
  };
};

// REDUCER
const initialState = {};

export default function singleExerciseReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EXERCISE:
      return action.exercise;
    default:
      return state;
  }
}
