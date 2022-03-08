import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDeleteImage from './EditDeleteImage';

function EditDeleteModal({image}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='editDeleteImageModalButton' onClick={() => setShowModal(true)}>...</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditDeleteImage image={image} setShowModal= />
        </Modal>
      )}
    </>
  );
}

export default EditDeleteModal;
