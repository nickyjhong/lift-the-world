import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchExerciseCategory } from '../../store/exercises';
import { addToWorkout } from "../../store/workout";
import { Link } from "react-router-dom";

export default function ExerciseGroup(props) {
  let { category } = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) => state.allExercises);

  useEffect(() => {
    dispatch(fetchExerciseCategory(category))
  }, [dispatch, category])

  return (
    <div>
      {group ? (
        <div>
          <Link to="/exercises">
          </Link>
          <ul>
            {group.map((exercise) => {
              return (
                <li 
                  key={exercise.id}
                  className="exercise-list-item"
                >
                  <Link to={`/exercise/${exercise.id}`}>
                    {exercise.name}
                  </Link>
                  <button onClick={() => dispatch(addToWorkout(exercise))}>add to workout</button>
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <p>No exercises</p>
      )}
    </div>
  )
}
