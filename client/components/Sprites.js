import React, {Component, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";


const ChooseSprites = ()=>{
   const dispatch = useDispatch();
   const sprites = useSelector((state)=>{
    state.sprites
   })
    
    useEffect(()=>{
        dispatch(fetchUnlockedSprites());
    }, [])
    return (
        <div>

        </div>
    )
}

export default ChooseSprites;