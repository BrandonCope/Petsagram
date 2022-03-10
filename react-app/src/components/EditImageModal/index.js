import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditImageForm from './EditImageForm';
import './EditImage.css'

function EditImageModal({image}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='image-edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImageForm image={image} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditImageModal;
