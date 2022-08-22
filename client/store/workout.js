import axios from "axios";
import { TOKEN } from './auth';

// ACTION TYPES
const SET_WORKOUT = 'SET_WORKOUT';
const UPDATE_WORKOUT = 'UPDATE_WORKOUT';

// ACTION CREATORS
export const _setWorkout = (workout) => ({
  type: SET_WORKOUT,
  workout
});

export const _updateWorkout = (workout) => ({
  type: UPDATE_WORKOUT,
  workout
})

// THUNKS
export const fetchWorkout = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get('/api/workout', {
          headers: {
            authorization: token,
          },
        });
        dispatch(_setWorkout(data));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const addToWorkout = (exercise) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.post('/api/workout', {
          exerciseId: exercise.id,
          }, {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(_updateWorkout(data));
      }
    } catch (error) {
      console.log(error)
    }
  }
}
// REDUCER
const initialState = [];

export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUT:
      return action.workout;
    case UPDATE_WORKOUT:
      return action.workout;
    default: 
      return state;
  }
}