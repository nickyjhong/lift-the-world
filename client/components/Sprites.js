import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUnlockedSprites } from '../store/sprites';


const ChooseSprites = ()=>{
   const dispatch = useDispatch();
   const sprites = useSelector((state)=>{
    state.sprites
   });
    
    useEffect(()=>{
        dispatch(fetchUnlockedSprites());
    }, [dispatch]);

    console.log('SPRITES', sprites);

    return (
        <div>
            <h1>Here are your sprites!</h1>
            

        </div>
    )
}

export default ChooseSprites;