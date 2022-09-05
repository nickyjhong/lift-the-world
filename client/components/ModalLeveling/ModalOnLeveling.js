import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../../store/singleUser";
import Modal from "./Modal";
import { fetchSelectedSprite } from "../../store/fetchSelectedSprite";

const ModalOnLeveling = ({ isActive, onClose }) => {
  const user = useSelector((state) => state.singleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  return (
    <div className="modal-level-container">
      <Modal
        open={isActive}
        onClose={() => {
          onClose();
        }}
      >
        <p className="modal-text">
          Congrats! You progressed to level {user.level}!
        </p>
        <img src="/sprites/cat/cat-jump.gif" className="cat-jump" />
        <p className="modal-text">
          Check your unlocked sprites to see if you received a new one!
        </p>
      </Modal>
    </div>
  );
};

export default ModalOnLeveling;
