import React, { createContext, useContext, useState } from "react";
import { Modal } from "../../context/Modal";
import FeedImageDetail from "./FeedImageDetail";
import LikeButton from "../LikeButton";
import LikeCounterModal from "../LikeCounter";

export const FeedImageDetailModalContext = createContext();
export const useFeedImageDetailModal = () => useContext(FeedImageDetailModalContext);

function FeedImageModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <FeedImageDetailModalContext.Provider
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
          <i className="fa-regular fa-message"></i>
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FeedImageDetail image={image} />
        </Modal>
      )}
      <LikeCounterModal image={ image } />
    </FeedImageDetailModalContext.Provider>
  );
}

export default FeedImageModal;
