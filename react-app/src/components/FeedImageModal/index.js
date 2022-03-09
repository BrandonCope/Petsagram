import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import FeedImageDetail from "./FeedImageDetail";
import {createLike, deleteLike} from '../../store/likes'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext);

function FeedImageModal({ image }) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.session.user);
  const stateLikes = useSelector((state) => state.likes);
  const likes = Object.values(stateLikes)
  const dispatch = useDispatch();
  
  let imageLikes;
  let userLike;
  useEffect(() => {
    console.log("inside useEffect")

    if (likes) {
      imageLikes = likes.filter((like) => like.image_id === image.id);
      userLike = imageLikes.find((imageLike) => imageLike.user_id === user.id);
    }
  }, [likes, imageLikes, userLike])
  console.log("this is imageLikes", imageLikes);
  console.log("this is the userLikes", userLike);
  
  const [heart, setHeart] = useState(userLike ? true : false);
  
  const handleLike = () => {
    if (!heart) {
      const payload = {
        user_id: user.id,
        image_id: image.id,
      };
      dispatch(createLike(payload));
    } else {
      dispatch(deleteLike(userLike.id))
    }
    setHeart(!heart);
  };

  let heartIcon;
  if (heart) {
    heartIcon = <i className="fa-solid fa-heart"></i>;
  } else {
    heartIcon = <i className="fa-regular fa-heart"></i>;
  }

  return (
    <ImageDetailModalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      <div className="feed-image-icon-div">
        <button className="feed-image-like-button" onClick={handleLike}>
          {heartIcon}
        </button>
        <button
          className="followModalButton"
          onClick={() => setShowModal(true)}
        >
          comment
        </button>
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
