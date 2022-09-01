import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUnlockedSprites } from '../store/sprites';
import { updateSelectedSprite } from '../store/updateSelectedSprite';


const ChooseSprites = () => {
    const dispatch = useDispatch();
    const [currentSprite, setCurrentSprite] = useState({name: ''});
    
    useEffect(()=>{
        dispatch(fetchUnlockedSprites());
    }, []);

    useEffect(()=>{
        dispatch(updateSelectedSprite(currentSprite));
    }, [currentSprite]);

    const chooseSprite = (event)=>{
        setCurrentSprite({name: event.target.value});
        
    }

    const sprites = useSelector((state)=>{
        return state.sprites
    }) || [];

    

    return (
        <div>
            <h1>Choose from your Unlocked Sprites!</h1>
            <div className='sprite-container'>
            {sprites.map((sprite)=>{
                return (<div key={sprites.indexOf(sprite)}>
                    <input className='sprite-small' onClick={chooseSprite} value={`${sprite.name}`} type={'image'} name={`${sprite.name}`} src={`/sprites/${sprite.name}/${sprite.name}-idle.gif`}></input>
                </div>)
            })}
            </div>
        </div>
    )
}

export default ChooseSprites;