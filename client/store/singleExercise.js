import axios from 'axios';

const GET_EXERCISE = 'GET_EXERCISE';

const getExercise = (exercise) => {
    return {
        type: GET_EXERCISE,
        exercise
    }
};

export const getExerciseThunk = (id) => {
    return async (dispatch) => {
        try {
            const {data: exercise} = await axios.get(`/exercise/${id}`);
            dispatch()
        } catch (error) {
            
        }
    }
}