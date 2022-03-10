import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../../context/Modal';
import FollowUnfollow from './FollowUnfollow';
// import EditDeleteImage from './EditDeleteImage';

export const FollowUnfollowModalContext = createContext()
export const useFollowUnfollowModal = () => useContext(FollowUnfollowModalContext)

function FollowUnfollowModal({image}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <FollowUnfollowModalContext.Provider
      value={{
        showModal,
        setShowModal
      }}
      >
      <button className='feed-container-follow-modal-button' onClick={() => setShowModal(true)}>...</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <FollowUnfollow image={image} />
        </Modal>
      )}
    </FollowUnfollowModalContext.Provider>
  );
}

export default FollowUnfollowModal;
