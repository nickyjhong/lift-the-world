import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPresetsThunk } from '../store/presets';

const PresetWorkouts =() => {

    const presets = useSelector((state) => state.allPresets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPresetsThunk())
    }, []);

    return(
        <div>
            <h1>Need Help Getting Started? Choose from the Workouts Below:</h1>
            {presets.map((preset)=>{
                return (<Link key={presets.indexOf(preset)} to='/unk' workout={preset}><button>{preset.name}</button></Link>)
            })}
        </div>
    )
}

export default PresetWorkouts;