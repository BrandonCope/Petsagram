import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';
import './EditComments.css'

function EditCommentModal({ comment }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='comment-edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm comment={comment} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;
