import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPresetsThunk } from "../../store/workout";
import Loading from "../Loading";

const PresetWorkouts = () => {
  const dispatch = useDispatch();

  const presets = useSelector((state) => state.workout || []);

  useEffect(() => {
    dispatch(getPresetsThunk());
  }, [dispatch]);

  if (!presets || !presets[0] || presets.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h1 className="preset-heading">
        Need help getting started? Choose from the preset workouts below:
      </h1>
      {presets.map((preset) => {
        return (
          <div className="preset-btn-container" key={preset.id}>
            <Link workout={preset} to={`/workout/preset/${preset.id}`}>
              <button className="preset-workouts">
                <img src="" />
                {preset.name}
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PresetWorkouts;
