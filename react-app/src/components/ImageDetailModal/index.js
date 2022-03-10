import React, {createContext, useContext, useState} from 'react'
import { Modal } from '../../context/Modal';
import ImageDetail from './ImageDetail'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext)

function ImageDetailModal({image}) {
  const [showModal, setShowModal] = useState(false);


  return (
    <ImageDetailModalContext.Provider
        value={{
            showModal,
            setShowModal
        }}
        >
      <button className='followModalButton' onClick={() => setShowModal(true)}><img alt={image.summary} className='user-pictures' src={image.image}></img></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageDetail image={image} />
        </Modal>
      )}
    </ImageDetailModalContext.Provider>
  );
}

export default ImageDetailModal;
