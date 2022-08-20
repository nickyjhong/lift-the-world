import React, { Component, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchExercise } from '../store/singleExercise';
import { addToWorkout } from '../store/workout';
import { Link, useParams } from 'react-router-dom';

const SingleExercise = () => {
  let { id } = useParams();

  const exercise = useSelector((state) => state.singleExercise);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercise(id))
  }, [dispatch, id]);

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addToWorkout(exercise))
  }

  return (
    <div>
      {exercise && exercise.id ? (
        <div>
          <h3>{exercise.name}</h3>
          <button onClick={handleAdd}>
            add to workout
          </button>
        </div>
      ) : (
        <div>
          <p>No exercises found</p>
        </div>
      )}
    </div>
  )
}

export default SingleExercise