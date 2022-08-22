import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorkout } from "../store/workout";

const weights = [
  { name: "gallon of water", weight: 8, image: "" },
  { name: "watermelon", weight: 20, image: "" },
  { name: "small bale of hay", weight: 50, image: "" },
  { name: "twin size mattress or 34 bottles of wine", weight: 75, image: "" },
  { name: "toilet or 8000 quarters", weight: 100, image: "" },
  { name: "cheetah", weight: 120, image: "" },
  { name: "mountain lion", weight: 150, image: "" },
  { name: "beer keg", weight: 160, image: "" },
  { name: "kangaroo", weight: 200, image: "" },
  { name: "mule deer", weight: 300, image: "" },
  { name: "reindeer", weight: 400, image: "" },
  { name: "wild boar", weight: 530, image: "" },
  { name: "black bear", weight: 640, image: "" },
  { name: "brown bear", weight: 1060, image: "" },
  { name: "polar bear", weight: 1300, image: "" },
  { name: "bison", weight: 2000, image: "" },
  { name: "Honda Civic", weight: 2500, image: "" },
  { name: "male giraffe", weight: 3000 - 4200, image: "" },
  {
    name: "rhinocerus or half of a blue whale's tongue",
    weight: 5000,
    image: "",
  },
  { name: "truck", weight: 6000 - 8000, image: "" },
  { name: "southern elephant seal", weight: 10000, image: "" },
  { name: "T-rex", weight: 11000 - 15000, image: "" },
  { name: "African elephant or 3 Mercedes Maybachs", weight: 15000, image: "" },
  { name: "Cadillac The Beast", weight: 20000, image: "" },
  { name: "school bus", weight: 25000, image: "" },
  { name: "13.5 school buses", weight: 338000, image: "" },
];

// const weightFunction = (totalWeight) => {
  // for (let i = 0; i < weights.length; i++) {
  //   if (totalWeight <= weights[i].weight) {
  //     return [weights[i].name, weights[i].image]
  //   }
  // }
//   while (totalWeight >)
// };

export class WeightComparison extends Component {
  componentDidMount() {
    this.props.weightsCompared();
  }

  render() {
    const exercises = this.props.weightsComparison.exercises || [];

    const totalWeight = exercises.map((exercise) => {
      return exercise.workoutlist.sets.reduce((accum, curr) => {
        let totalWeight = curr.reps * curr.weight;
        return accum + totalWeight;
      }, 0);
    })[0];

    console.log("propssss", exercises);
    console.log("weight", totalWeight);
    return (
      <div>
        <div className="recap-total-weight">
          <p>You lifted {totalWeight} pounds during this workout!</p>
          <p>That's the weight of X</p>

          <img />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weightsComparison: state.workout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    weightsCompared: () => {
      dispatch(fetchWorkout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeightComparison);
