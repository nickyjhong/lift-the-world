import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const SinglePreset = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // const preset = useSelector((state) => state.)

  return (
    <div>
      {workout && workout.id ? (
        
      ): (
        <p> No preset workout here!</p>
      )}
    </div>
  )
}

export default SinglePreset