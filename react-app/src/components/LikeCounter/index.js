import React, { useState, useEffect} from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import LikeCounterList from "./LikeCounterList";

function LikeCounterModal({ image,setShowModal }) {
  const [showNestedModal, setShowNestedModal] = useState(false);
  const stateLikes = useSelector((state) => state.likes);
  const likes = Object.values(stateLikes);
  const imageLikes = likes.filter((like) => like.image_id === image.id);
  const [likeCounter, setLikeCounter] = useState(false);
  const [likeCounterString, setLikeCounterString] = useState("");
  let numLikes = imageLikes.length;
  useEffect(() => {
    if (numLikes === 1) {
      setLikeCounterString(`${numLikes} like`);
      setLikeCounter(true);
    } else if (numLikes > 1) {
      setLikeCounterString(`${numLikes} likes`);
      setLikeCounter(true);
    } else {
      setLikeCounterString('');
      setLikeCounter(false);
    }
  }, [numLikes]);


  return (
    <div>
      {likeCounter && (
        <div>
          <button
            className="likeCounterModalButton"
            onClick={() => setShowNestedModal(true)}
          >
            {likeCounterString}
          </button>
          {showNestedModal && (
            <Modal onClose={() => setShowNestedModal(false)}>
              <LikeCounterList imageLikes={imageLikes} setShowModal= {setShowModal} setShowNestedModal={setShowNestedModal} />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}

export default LikeCounterModal;
