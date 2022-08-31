import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUnlockedSprites } from '../store/sprites';
import { updateSelectedSprite } from '../store/updateSelectedSprite';


const ChooseSprites = ()=>{
   const dispatch = useDispatch();
   const [currentSprite, setSprite] = useState({name: ''});
    
    useEffect(()=>{
        dispatch(fetchUnlockedSprites());
        console.log('SPRITES', sprites);
    }, [dispatch]);

    const chooseSprite = (event)=>{
        setSprite({name: event.target.name});
        dispatch(updateSelectedSprite(currentSprite));
    }

    const sprites = useSelector((state)=>{
        return state.sprites
       }) || [];

    

    return (
        <div>
            <h1>Select from your unlocked sprites!</h1>
            <div className='sprite-container'>
            {sprites.map((sprite)=>{
                return (<div className='sprite-small' key={sprites.indexOf(sprite)}>
                    {/* <img src={`/sprites/${sprite.name}/${sprite.name}-idle.gif`}></img> */}
                    <input onClick={chooseSprite} type={'image'} name={`${sprite.name}`} src={`/sprites/${sprite.name}/${sprite.name}-idle.gif`}></input>
                </div>)
            })}
            </div>
            

        </div>
    )
}

export default ChooseSprites;