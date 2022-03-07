import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import SignUpForm from './SignUpForm';

function FollowsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='followModalButton' onClick={() => setShowModal(true)}>...</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <FollowForm /> */}
        </Modal>
      )}
    </>
  );
}

export default FollowsModal;
