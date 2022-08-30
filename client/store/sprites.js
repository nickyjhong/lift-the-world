import axios from "axios";

const SET_SPRITES = 'SET_SPRITES';

const setSprites = (sprites)=>{
    return {
        type: SET_SPRITES,
        sprites
    }
};

export const fetchUnlockedSprites = ()=>{
    return async (dispatch)=>{
        try {
            const token = window.localStorage.getItem("token");
           const {data: sprites} = await axios.get('/api/sprites', {
                headers: {
                    authorization: token
                }
            });
            dispatch(setSprites(sprites))
        } catch (error) {
            console.log(error)
        }
    }
};

export default 