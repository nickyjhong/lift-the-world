// import axios from "axios";

// const GET_PRESETS = "GET_PRESETS";

// const getPresets = (presets) => ({
//   type: GET_PRESETS,
//   presets,
// });

// export const getPresetsThunk = () => async (dispatch) => {
//   try {
//     const { data: presets } = await axios.get("/api/presetworkouts");
//     dispatch(getPresets(presets));
//   } catch (error) {
//     console.log(error);
//   }
// };

// const initialState = [];

// export default function presetsReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_PRESETS:
//       return action.presets;
//     default:
//       return state;
//   }
// }
