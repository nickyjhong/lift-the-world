import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnlockedSprites } from "../../store/sprites";
import { updateSelectedSprite } from "../../store/updateSelectedSprite";

const ChooseSprites = (props) => {
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const [currentSprite, setCurrentSprite] = useState({ name: "" });

  useEffect(() => {
    dispatch(fetchUnlockedSprites());
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(updateSelectedSprite(currentSprite));
      setTimeout(() => {
        props.history.push("/profile");
      }, 40);
    } else {
      isMounted.current = true;
    }
  }, [currentSprite]);

  const chooseSprite = (event) => {
    setCurrentSprite({ name: event.target.value });
  };

  const sprites =
    useSelector((state) => {
      return state.sprites;
    }) || [];

  return (
    <div>
      <h1 className="choose-sprite-heading">
        Choose from your unlocked sprites!
      </h1>
      <div className="sprite-container">
        {sprites.map((sprite) => {
          return (
            <div className="sprite-individual" key={sprites.indexOf(sprite)}>
              <input
                className="sprite-small"
                onClick={chooseSprite}
                value={`${sprite.name}`}
                type={"image"}
                name={`${sprite.name}`}
                src={`/sprites/${sprite.name}/${sprite.name}-idle.gif`}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSprites;
