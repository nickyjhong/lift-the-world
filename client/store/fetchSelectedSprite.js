import axios from "axios";

const GET_SELECTED_SPRITE = 'GET_SELECTED_SPRITE';

const getSelectedSprite = (sprite)=>{
    return {
        type: GET_SELECTED_SPRITE,
        sprite
    }
};

export const fetchSelectedSprite = ()=>{
    return async (dispatch)=>{
        try {
            const token = window.localStorage.getItem('token');
            const {data: sprite} = await axios.get('/api/sprites/selectedSprite', 
            {headers:{
            authorization: token
        }});
        dispatch(getSelectedSprite(sprite))
    }
    catch (error) {
            console.log(error);
        } 
    }
};

const initialState = {};

export default function getSelectedSpriteReducer(state = initialState, action){
    switch(action.type){
        case GET_SELECTED_SPRITE:
            return action.sprite;
        default:
            return state;
    }
};