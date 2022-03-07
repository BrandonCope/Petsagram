import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import SignUpForm from './SignUpForm';

function CreateImageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='followModalButton' onClick={() => setShowModal(true)}>Share Image</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <CreateImageForm /> */}
        </Modal>
      )}
    </>
  );
}

export default CreateImageModal;
