import axios from "axios";

const GET_LEADERS = "GET_LEADERS";

const getLeaders = (leaders) => {
  return {
    type: GET_LEADERS,
    leaders,
  };
};

export const getLeadersThunk = () => {
  return async (dispatch) => {
    try {
      const { data: leaders } = await axios.get("/api/leaders");
      dispatch(getLeaders(leaders));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function leadersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEADERS:
      return action.leaders;
    default:
      return state;
  }
}
