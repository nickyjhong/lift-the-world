render() {
  if (
    !this.props.workoutlist.allExercises ||
    this.props.workoutlist.allExercises.length === 0
  ) {
    return <div>Loading... please add a workout!</div>;
  }
  console.log(this.props.workoutlist);

  // const { exercises, id: workoutId } = this.props.workout;
  const { allExercises } = this.props.workoutlist;
  console.log("workout list props", allExercises);
  console.log("workout  props", this.props.workout);

  return (
    <div className="cw-container">
      <div className="cw-exercise-container">
        {//map through}
        {allExercises.map((exerciseListFromAll) => {
          // filter through workout from this.props.exercises.id === exerciseListFromAll.exerciseId
          const exerciseObjFromWorkoutReducer = () => {
            this.props.workout.exercises.filter(({ id }) => {
              return exerciseListFromAll.exerciseId === id;
            });
          };
          console.log("name", exerciseObjFromWorkoutReducer().name);
          return (
            <div key={exercise.id}>
              <h2 className="cw-exercise-name">{exercise.name}</h2>
              <div className="cw-exercise">
                <div className="cw-headings">
                  <p className="cw-heading">Set</p>
                  <p className="cw-heading cw-previous-heading">Previous</p>
                  <p className="cw-heading">Reps</p>
                  <p className="cw-heading cw-weight-heading">Weight</p>
                  <p className="cw-heading cw-heading-check">️✔️️</p>
                </div>
                {exercise.sets.map((set, index) => {
                  return (
                    <CurrentWorkoutSet
                      key={index}
                      workoutId={workoutId}
                      exerciseId={exercise.id}
                      setId={index + 1}
                      weight={set.weight}
                      reps={set.reps}
                    />
                  );
                })}

                <div className="cw-btn-container">
                  <button
                    className="cw-add-btn"
                    onClick={() =>
                      this.props.addSet({
                        exerciseId: exercise.id,
                        reps: "0",
                        setId:
                          exercise.workoutlist.sets[
                            exercise.workoutlist.sets.length - 1
                          ].setId + 1,
                        weight: 0,
                        workoutId: workoutId,
                      })
                    }
                  >
                    + Add Set
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {this.props.workout.status === "active" ? (
        <Link to="/recap">
          <button
            className="cw-finish-btn"
            onClick={() => this.props.finishWorkout()}
          >
            Finish Workout
          </button>
        </Link>
      ) : (
        <button>Start a new workout</button>
      )}
    </div>
  );
}