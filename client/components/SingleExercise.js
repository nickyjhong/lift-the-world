import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { getSingleExerciseThunk } from '../store/singleExercise';
import { useEffect } from 'react';
import YoutubeEmbed from './YoutubeEmbed';


function SingleExercise(){
    const [exercise, setExercise] = useState({
        name: 'Example Exercise',
        category: 'Example Category',
        equipment: 'things, stuff',
        tipsAndTricks: 'don\'t do this, do that',
        youtubeLink: 'JB2oyawG9KI'
    });
    const equipmentArr = exercise.equipment.split(",")
    const tipsAndTricksArr = exercise.tipsAndTricks.split(',')

    useEffect(()=>{
        if(this.props.id){
        const exercise = getSingleExercise(this.props.id);
        setExercise(exercise);
        }
    }, [])

    return (
        <div>
            <h1>{exercise.name}</h1>
            <YoutubeEmbed embedId={youtubeLink}/>
            <h2>Equipment Needed:</h2>
            <ul>{equipmentArr.map((equipment)=>{
                return (
                    <li key={equipmentArr.indexOf(equipment)}>{equipment}</li>
                )
            })}
            </ul>
            <h2>Tips:</h2>
            <ul>{tipsAndTricksArr.map((tip)=>{
                return (
                    <li key={tipsAndTricksArr.indexOf(tip)}>{tip}</li>
                )
            })}
            </ul>
            <button>Add Exercise</button>
            <button>Get Help</button>
        </div>
    )

}

const mapDispatchToProps = (dispatch)=>{
    return {
        getSingleExercise: (id) => dispatch(getSingleExerciseThunk(id))
}
    } 

export default connect(null, mapDispatchToProps)(SingleExercise);