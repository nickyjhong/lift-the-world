import axios from "axios";

// ACTION TYPES
const GET_PRESET = "GET_PRESET";

// ACTION CREATORS
const getPreset = (preset) => ({
  type: GET_PRESET,
  preset,
});

// THUNKS
export const fetchPresetWorkout = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/workout/preset/${id}`);
    dispatch(getPreset(data));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
const initialState = {};

export default function singleWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRESET:
      return action.preset;
    default:
      return state;
  }
}
