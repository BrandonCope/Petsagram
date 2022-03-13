import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDeleteImage from './EditDeleteImage';

export const EditModalContext = createContext()
export const useEditModal = () => useContext(EditModalContext)

function EditDeleteModal({ image}) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <EditModalContext.Provider
      value={{
        showEditModal,
        setShowEditModal
      }}
    >
      <button className='editDeleteImageModalButton' onClick={() => setShowEditModal(true)}>...</button>
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <EditDeleteImage image={image} />
        </Modal>
      )}
    </EditModalContext.Provider>
  );
}

export default EditDeleteModal;
