import React, { createContext, useContext, useState } from 'react'
import { Modal } from '../../context/Modal';
import ImageDetail from './ImageDetail'
import { NestedContext } from '../../context/NestedContext'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext)

function ImageDetailModal({ image }) {
  const [showModal, setShowModal] = useState(false);
  const {showNestedModal, setShowNestedModal} = useContext(NestedContext);

  return (
    // <ImageDetailModalContext.Provider
    //   value={{
    //     showModal,
    //     setShowModal
    //   }}
    // >
    <div>
        <button className='followModalButton' onClick={() => setShowNestedModal(true)}><img alt={image.summary} className='user-pictures' src={image.image}></img></button>
        {showNestedModal && (
          <Modal onClose={() => setShowNestedModal(false)}>
            <ImageDetail image={image} setShowNestedModal={setShowNestedModal} />
          </Modal>
        )}
    </div>
    // </ImageDetailModalContext.Provider>
  );
}

export default ImageDetailModal;
