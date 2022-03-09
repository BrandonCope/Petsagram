import React, { createContext, useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import FeedImageDetail from './FeedImageDetail'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext)

function FeedImageModal({ image }) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.session.user)
  const likes = useSelector(state => state.likes)
  const imageLikes = likes.filter(like => like.image_id === image.id)
  const userLike = imageLikes.find(imageLike => imageLike.user_id === user.id)
  const [heart, setHeart] = useState(userLike ? true : false);

  const handleLike = () => {
    setHeart(!heart)
  }

  let heartIcon;
  if (heart) {
    heartIcon = (
      <i class="fa-solid fa-heart"></i>
    )
  } else {
    heartIcon = (
      <i class="fa-regular fa-heart"></i>
    )
  }



  return (
    <ImageDetailModalContext.Provider
      value={{
        showModal,
        setShowModal
      }}
    >
      <div className="feed-image-icon-div">
        <button className='feed-image-like-button' onClick={handleLike}>{heartIcon}</button>
        <button className='followModalButton' onClick={() => setShowModal(true)}>comment</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FeedImageDetail image={image} />
        </Modal>
      )}
    </ImageDetailModalContext.Provider>
  );
}

export default FeedImageModal;
