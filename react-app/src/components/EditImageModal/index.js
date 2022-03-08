import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditImage from './EditImageForm';

function CreateImageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createImageModalButton' onClick={() => setShowModal(true)}>Create Image</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImage />
        </Modal>
      )}
    </>
  );
}

export default CreateImageModal;