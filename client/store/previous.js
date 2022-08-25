import axios from "axios";
import { TOKEN } from './auth';

// ACTION TYPES
const GET_PREVIOUS = "GET_PREVIOUS"

// ACTION CREATORS
export const _getPrevious = (previous) => ({
  type: GET_PREVIOUS,
  previous
})

// THUNKS
export const fetchPreviousWorkout = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get('/api/workout/previous', {
          headers: {
            authorization: token,
          },
        });
        dispatch(_getPrevious(data));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// REDUCER
const initialState = [];

export default function previousReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PREVIOUS:
      return action.previous;
    default: 
      return state;
  }
}