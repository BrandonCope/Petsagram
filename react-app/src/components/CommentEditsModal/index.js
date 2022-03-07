import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import SignUpForm from './SignUpForm';

function CommentEditsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='followModalButton' onClick={() => setShowModal(true)}>...</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <Edit From /> */}
          <button>Delete</button>
        </Modal>
      )}
    </>
  );
}

export default CommentEditsModal;
