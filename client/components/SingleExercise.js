import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExercise } from '../store/singleExercise';
import { addToWorkout } from '../store/workout';
import { Link, useParams } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';

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

  const equipmentArr = exercise.equipment.split(",");
  const tipsAndTricksArr = exercise.tipsAndTricks.split(",");

  return (
    <div>
      {exercise && exercise.id ? (
        <div>
              <h1>{exercise.name}</h1>
              <YoutubeEmbed embedId={exercise.embedId} />
               <h2>Equipment Needed:</h2>
              <ul>
                {equipmentArr.map((equipment) => {
                  return <li key={equipmentArr.indexOf(equipment)}>{equipment}</li>
                })}
              </ul>
              <h2>Tips:</h2>
              <ul>
                {tipsAndTricksArr.map((tip) => {
                  return <li key={tipsAndTricksArr.indexOf(tip)}>{tip}</li>
                })}
              </ul>
              <button onClick={handleAdd}>Add Exercise</button>
              <button>Get Help</button>
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

// function SingleExercise() {
//   const [exercise, setExercise] = useState({
//     name: "Example Exercise",
//     category: "Example Category",
//     equipment: "things, stuff",
//     tipsAndTricks: "don't do this, do that",
//     embedId: "JB2oyawG9KI",
//   });
//   const equipmentArr = exercise.equipment.split(",");
//   const tipsAndTricksArr = exercise.tipsAndTricks.split(",");

//   useEffect(() => {
//     if (this.props.id) {
//       const exercise = getSingleExercise(this.props.id);
//       setExercise(exercise);
//     }
//   }, []);

//   const addExercise = () => {};

//   return (
//     <div>
//       <h1>{exercise.name}</h1>
//       <YoutubeEmbed embedId={exercise.embedId} />
//       <h2>Equipment Needed:</h2>
//       <ul>
//         {equipmentArr.map((equipment) => {
//           return <li key={equipmentArr.indexOf(equipment)}>{equipment}</li>;
//         })}
//       </ul>
//       <h2>Tips:</h2>
//       <ul>
//         {tipsAndTricksArr.map((tip) => {
//           return <li key={tipsAndTricksArr.indexOf(tip)}>{tip}</li>;
//         })}
//       </ul>
//       <button onClick={addExercise}>Add Exercise</button>
//       <button>Get Help</button>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSingleExercise: (id) => dispatch(getSingleExerciseThunk(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(SingleExercise);
