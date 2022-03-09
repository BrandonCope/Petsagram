import React, { createContext, useContext, useState } from 'react'
import { Modal } from '../../context/Modal';
import FeedImageDetail from './FeedImageDetail'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext)

function FeedImageModal({ image }) {
  const [showModal, setShowModal] = useState(false);


  return (
    <ImageDetailModalContext.Provider
      value={{
        showModal,
        setShowModal
      }}
    >
      <button className='followModalButton' onClick={() => setShowModal(true)}>comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FeedImageDetail image={image} />
        </Modal>
      )}
    </ImageDetailModalContext.Provider>
  );
}

export default FeedImageModal;
