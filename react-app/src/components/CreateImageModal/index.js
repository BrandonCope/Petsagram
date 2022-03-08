import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateImage from './CreateImageForm';

function CreateImageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createImageModalButton' onClick={() => setShowModal(true)}>Create Image</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateImage setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default CreateImageModal;
