import React, { useEffect } from 'react'
import { getPrevious } from '../../store/workout'
import { useSelector, useDispatch } from "react-redux";

export default function PreviousWorkouts() {
  const prevWorkouts = useSelector((state) => state.workout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrevious());
  }, [dispatch])

  console.log('previous', prevWorkouts);
  
  return (
    <div>PreviousWorkouts</div>
  )
}
