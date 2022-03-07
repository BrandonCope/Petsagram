import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import SignUpForm from './SignUpForm';

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>

      <button className='followModalButton' onClick={() => setShowModal(true)}>Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <ImageDetail /> */}
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
