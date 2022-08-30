import React, {Component, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUnlockedSprites } from '../store/sprites';


const ChooseSprites = ()=>{
   const dispatch = useDispatch();
   const sprites = useSelector((state)=>{
    state.sprites
   });
    
    useEffect(()=>{
        dispatch(fetchUnlockedSprites());
        console.log('SPRITES', sprites);
    }, []);

    return (
        <div>
            <h1>Here are your sprites!</h1>
            {sprites.map((sprite) => {
                  return (<div key={sprite.id}>
                    {/* <img src={`../../public/sprites/${sprite.name}/${sprite.name}-idle.gif`}></img> */}
                    <h2>{sprite.name}</h2>
                 </div>)
            })}

        </div>
    )
}

export default ChooseSprites;