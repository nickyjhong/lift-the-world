import axios from "axios";

const GET_SINGLE_EXERCISE = "GET_SINGLE_EXERCISE";
const ADD_SINGLE_EXERCISE = "ADD_SINGLE_EXERCISE";

const getSingleExercise = (exercise) => {
  return {
    type: GET_SINGLE_EXERCISE,
    exercise,
  };
};

const addSingleExercise = (exercise) => {
  return {
    type: ADD_SINGLE_EXERCISE,
    exercise,
  };
};

export const getSingleExerciseThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data: exercise } = await axios.get(`/exercise/${id}`);
      dispatch(getSingleExercise(exercise));
    } catch (error) {
      console.log("getSingleExercise Error", error);
    }
  };
};

export const addSingleExerciseThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data: exercise } = await axios.put(`/exercise/${id}`);
      dispatch(addSingleExercise(exercise));
    } catch (error) {
      console.log("addSingleExercise Error", error);
    }
  };
};

const initialState = {};

export default function singleExerciseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_EXERCISE:
      return action.exercise;
    case ADD_SINGLE_EXERCISE:
      return action.exercise;
    default:
      return state;
  }
}
