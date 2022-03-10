import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import FeedImageDetail from "./FeedImageDetail";
import LikeButton from "../LikeButton";
import LikeCounterModal from "../LikeCounter";

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext);

function FeedImageModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ImageDetailModalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      <div className="feed-image-icon-div">
        <LikeButton image={ image } />
        <button
          className="followModalButton"
          onClick={() => setShowModal(true)}
        >
          <i class="fa-regular fa-message"></i>
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FeedImageDetail image={image} />
        </Modal>
      )}
      <LikeCounterModal image={ image } />
    </ImageDetailModalContext.Provider>
  );
}

export default FeedImageModal;
