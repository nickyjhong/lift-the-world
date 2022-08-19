import axios from 'axios';

const GET_SINGLE_EXERCISE = 'GET_SINGLE_EXERCISE';

const getSingleExercise = (exercise) => {
    return {
        type: GET_SINGLE_EXERCISE,
        exercise
    }
};

export const getSingleExerciseThunk = (id) => {
    return async (dispatch) => {
        try {
            const {data: exercise} = await axios.get(`/exercise/${id}`);
            dispatch(getSingleExercise(exercise));
        } catch (error) {
        }
    }
};

const initialState = {};

export default function singleExerciseReducer(state = initialState, action){
    switch(action.type){
        case GET_SINGLE_EXERCISE:
            return action.exercise;
            default:
                return state;
    }
}