import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditImageForm from './EditImageForm';

function EditImageModal({image}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createImageModalButton' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImageForm image={image} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditImageModal;
