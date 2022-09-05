import axios from 'axios';
import { TOKEN } from './auth';
import { fetchSingleUser } from './singleUser';

// ACTION TYPES
const SET_WORKOUT = 'SET_WORKOUT';
const UPDATE_WORKOUT = 'UPDATE_WORKOUT';
const GET_PRESETS = 'GET_PRESETS';
const GET_PREVIOUS_WORKOUTS = 'GET_PREVIOUS_WORKOUTS';

// ACTION CREATORS
export const _setWorkout = (workout) => ({
  type: SET_WORKOUT,
  workout,
});

export const _updateWorkout = (workout) => ({
  type: UPDATE_WORKOUT,
  workout,
});

export const getPresets = (presets) => ({
  type: GET_PRESETS,
  presets,
});

export const _getPrevious = (workouts) => ({
  type: GET_PREVIOUS_WORKOUTS,
  workouts,
});

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
      console.log(error);
    }
  };
};

export const addToWorkout = (exercise) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.post(
          '/api/workout',
          {
            exerciseId: exercise.id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(_updateWorkout(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const doPresetWorkout = (workoutId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.post(
          `/api/workout/${workoutId}/add`,
          {
            workoutId: workoutId,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(_updateWorkout(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPresetsThunk = () => async (dispatch) => {
  try {
    const { data: presets } = await axios.get('/api/workout/preset');
    dispatch(getPresets(presets));
  } catch (error) {
    console.log(error);
  }
};

export const getPrevious = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get('/api/workout/allprevious', {
          headers: {
            authorization: token,
          },
        });
        dispatch(_getPrevious(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const finishWorkout = (workout) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.put(`/api/workout/finish`, workout, {
          headers: {
            authorization: token,
          },
        });
        dispatch(_updateWorkout(data));
        dispatch(fetchSingleUser());
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateWorkoutName = (workout) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.put('/api/workout/update', workout, {
          headers: {
            authorization: token,
          },
        });
        dispatch(_updateWorkout(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const initialState = [];

export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRESETS:
      return action.presets;
    case GET_PREVIOUS_WORKOUTS:
      return action.workouts;
    case SET_WORKOUT:
      return action.workout;
    case UPDATE_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}
