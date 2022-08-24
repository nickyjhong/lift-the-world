import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchExerciseCategory } from '../../store/exercises';
import { addToWorkout } from "../../store/workout";
import { Link } from "react-router-dom";

export default function ExerciseGroup(props) {
  let { category } = useParams();
  let catName = category.charAt(0).toUpperCase() + category.slice(1)
  const dispatch = useDispatch();

  const group = useSelector((state) => state.allExercises);

  useEffect(() => {
    dispatch(fetchExerciseCategory(category))
  }, [dispatch, category])
  console.log('catname', catName)
  return (
    <div>
      {group ? (
        <div className="all-exercises-container">
          <h1 className="all-exercises-heading">{catName} Exercises</h1>
          <Link to="/exercises" className="all-exercises-link">
            See all exercises
          </Link>
          <ul className="all-exercises-list">
            {group.map((exercise) => {
              return (
                <li 
                  key={exercise.id}
                  className="all-exercises-list-item"
                >
                  <Link to={`/exercise/${exercise.id}`} className="all-exercises-list-name">
                    {exercise.name}
                  </Link>
                  <button 
                    onClick={() => dispatch(addToWorkout(exercise))}
                    className="all-exercises-add-btn"
                  >
                    add to workout</button>
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
