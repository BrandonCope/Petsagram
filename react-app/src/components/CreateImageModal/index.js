import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateImage from './CreateImageForm';
import './CreateImage.css'

function CreateImageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createImageModalButton' onClick={() => setShowModal(true)}><i className="fa-solid fa-square-plus"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateImage setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default CreateImageModal;
