import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateWorkout() {
  const dispatch = useDispatch()
  const workout = useSelector((state) => state.workout);
  return (
    <div>UpdateWorkout</div>
  )
}
