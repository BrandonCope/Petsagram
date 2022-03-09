import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux"
import LikeCounterList from './LikeCounterList';

function LikeCounterModal({image}) {
  const [showModal, setShowModal] = useState(false);
  const stateLikes = useSelector(state => state.likes);
  const likes = Object.values(stateLikes);
  const [likeCounter, setLikeCounter] = useState(false);
  let numLikes;
  let imageLikes
  let likeCounterString = '';
  useEffect(() => {
    console.log("Inside useEffect")
    imageLikes = likes.filter((like) => like.image_id === image.id);
    console.log(imageLikes);
    numLikes = imageLikes.length;
    console.log(numLikes);
    if (+numLikes === 1) {
        likeCounterString = `${numLikes} like`;
        setLikeCounter(true);
    } else if (+numLikes > 1) {
        likeCounterString = `${numLikes} likes`;
        setLikeCounter(true);
    }
  }, [likes])
  console.log("LikeCounterString: ", likeCounterString);

  return (
    <div>
        {likeCounter && (
            <div>
                <button className='likeCounterModalButton' onClick={() => setShowModal(true)}>{likeCounterString}</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LikeCounterList imageLikes={imageLikes} />
                    </Modal>
                )}
            </div>
        )}
    </div>
  );
}

export default LikeCounterModal;
