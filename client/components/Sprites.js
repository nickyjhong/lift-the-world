import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUnlockedSprites } from '../store/sprites';


const ChooseSprites = ()=>{
   const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchUnlockedSprites());
        console.log('SPRITES', sprites);
    }, [dispatch]);

    const sprites = useSelector((state)=>{
        return state.sprites
       }) || [];

    

    return (
        <div>
            <h1>Here are your sprites!</h1>
            {sprites.map((sprite)=>{
                return (<div key={sprites.indexOf(sprite)}>
                    <h2>{sprite.name}</h2>
                </div>)
            })}
            

        </div>
    )
}

export default ChooseSprites;