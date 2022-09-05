import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser } from '../../store/singleUser';
import Modal from './Modal';

const ModalOnLeveling = ({ isActive, onClose }) => {
  const user = useSelector((state) => state.singleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  return (
    <div>
      <Modal
        open={isActive}
        onClose={() => {
          onClose();
        }}
      >
        Congrats! You leveled up to {user.level}!
      </Modal>
    </div>
  );
};

export default ModalOnLeveling;
