import axios from "axios";

// ACTION TYPES
const GET_PRESET = "GET_PRESET";
const UPDATE_WORKOUT = "UPDATE_WORKOUT";

// ACTION CREATORS
const getPreset = (preset) => ({
  type: GET_PRESET,
  preset,
});

const _updateWorkout = (workout) => ({
  type: UPDATE_WORKOUT,
  workout,
})

// THUNKS
export const fetchPresetWorkout = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/workout/preset/${id}`);
      dispatch(getPreset(data));
    } catch (error) {
      console.log(error);
    }
  }
};

export const updateWorkout = (workout) => {
  return async (dispatch) => {
    try { 
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.put("/api/workout/update", workout, {
          headers: {
            authorization: token
          }
        })
        dispatch(_updateWorkout(data))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// REDUCER
const initialState = {};

export default function singleWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRESET:
      return action.preset;
    case UPDATE_WORKOUT:
      return { ...action.workout, workout: action.workout };
    default:
      return state;
  }
}
