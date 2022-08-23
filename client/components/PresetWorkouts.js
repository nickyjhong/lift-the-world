import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPresetsThunk } from '../store/presets';

export default function PresetWorkouts(){

    const presets = useSelector((state) => state.presets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPresetsThunk)
        console.log('PRESETS', presets);
    }, [])

    return(
        <div>
            <h1>Need Help Getting Started? Choose from the Workouts Below:</h1>
            {presets.map((preset)=>{
                return (<Link to='/unk' workout={preset}><button>{preset.name}</button></Link>)
            })}
        </div>
    )
}