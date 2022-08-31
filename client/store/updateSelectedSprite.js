import axios from "axios";

const SELECT_SPRITE = 'SELECT_SPRITE';

const selectSprite = (sprite) => {
    return {
        type: SELECT_SPRITE,
        sprite
    }
};

export const updateSelectedSprite = (sprite)=> {
    return async (dispatch)=>{
        try {
        const token = window.localStorage.getItem("token");
        const {data: selectedSprite} = await axios.put('/api/sprites/update', sprite, {
                headers: {
                    authorization: token
                }
            });
            dispatch(selectSprite(selectedSprite));
            
        } catch (error) {
            console.log(error);
        }
    }
};

const initialState = {};

export default function selectedSpriteReducer(state = initialState, action){
    switch(action.type){
        case SELECT_SPRITE:
            return action.sprite;
            default:
                return state;
    }
}