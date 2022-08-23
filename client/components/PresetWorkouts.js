import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
export default function PresetWorkouts(){

    const presets = useSelector((state) => state.presets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPresets())
    }, [])


    return(
        <div>
            <h1>Need Help Getting Started? Choose from the Workouts Below:</h1>
            <Link to='/presetworkout' ><button>Chest and Triceps Workout 1</button></Link>
            
        </div>
    )
}