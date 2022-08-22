import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkout } from '../store/workout';

const weights = [
  { name: 'gallon of water', weight: 8, image: '' },
  { name: 'watermelon', weight: 20, image: '' },
  { name: 'small bale of hay', weight: 50, image: '' },
  { name: 'twin size mattress or 34 bottles of wine', weight: 75, image: '' },
  { name: 'toilet or 8000 quarters', weight: 100, image: '' },
  { name: 'cheetah', weight: 120, image: '' },
  { name: 'mountain lion', weight: 150, image: '' },
  { name: 'beer keg', weight: 160, image: '' },
  { name: 'kangaroo', weight: 200, image: '' },
  { name: 'mule deer', weight: 300, image: '' },
  { name: 'reindeer', weight: 400, image: '' },
  { name: 'wild boar', weight: 530, image: '' },
  { name: 'black bear', weight: 640, image: '' },
  { name: 'brown bear', weight: 1060, image: '' },
  { name: 'polar bear', weight: 1300, image: '' },
  { name: 'bison', weight: 2000, image: '' },
  { name: 'Honda Civid', weight: 2500, image: '' },
  { name: 'male giraffe', weight: 4200, image: '' },
  {
    name: "rhinocerus or half of a blue whale's tongue",
    weight: 5000,
    image: '',
  },
  { name: 'truck', weight: 6000 - 8000, image: '' },
  { name: 'southern elephant seal', weight: 10000, image: '' },
  { name: 'T-rex', weight: 11000 - 15000, image: '' },
  { name: 'African elephant or 3 Mercedes Maybachs', weight: 15000, image: '' },
  { name: 'Cadillac The Beast', weight: 20000, image: '' },
  { name: 'school bus', weight: 25000, image: '' },
];

export class WeightComparison extends Component {
  render() {
    console.log('propssss', this.props);
    return <div>Weight Comparison</div>;
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
