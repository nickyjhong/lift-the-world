import axios from "axios";

// ACTION TYPE
const SET_SINGLE_USER = "SET_SINGLE_USER";

// ACTION CREATOR
export const _setSingleUser = (user) => ({
  type: SET_SINGLE_USER,
  user,
});

// THUNK
export const fetchSingleUser = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await axios.get("/api/users/profile", {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setSingleUser(data));
      } else {
        console.log("Bad token");
      }
    } catch (err) {
      console.error("Can't find user!");
    }
  };
};

// REDUCER
const initialState = [];

export default function singleUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.user;
    default:
      return state;
  }
}
