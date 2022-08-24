import axios from "axios";

const GET_PRESET = "GET_PRESET";

const getPreset = (preset) => ({
  type: GET_PRESET,
  preset,
});

export const fetchPresetWorkout = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/presetworkouts/${id}`);
    dispatch(getPreset(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {};

export default function presetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRESET:
      return action.preset;
    default:
      return state;
  }
}
