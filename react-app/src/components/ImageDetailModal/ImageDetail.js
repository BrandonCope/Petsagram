import EditDeleteModal from "../EditDeleteModal"
import './ImageDetail.css'
// import { useImageDetailModal } from "./index";
import { NestedContext } from "../../context/NestedContext";
import { useSelector } from 'react-redux';
import LikeButton from "../LikeButton";
import LikeCounterModal from "../LikeCounter";
import FollowUnfollowModal from "../FollowUnfollowModal";
import DisplayComments from "../DisplayComments";
import CreateCommentForm from "../CommentForm";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

const ImageDetail = ({ image, setShowNestedModal }) => {
  // const { setShowModal } = useImageDetailModal()
  const history = useHistory();
  // const {setShowNestedModal} = useContext(NestedContext);
  // const [showModal, setShowModal] = useState(false);

  const user = useSelector(state => state.session.user)
  let sessionLinks;
  if (user) {
    if (user?.id === image?.user_id) {
      sessionLinks = (
        <>
          <EditDeleteModal image={image} />
        </>
      )
    } else {
      sessionLinks = (
        <>
          <FollowUnfollowModal image={image} />
        </>
      )

    }
  } else {
    sessionLinks = (
      <button className='feed-container-follow-modal-button' onClick={() => history.push('/')}>...</button>

    )
  }



  return (
    <div className="image-detail-component-page">
      <div>
        <img alt={image.summary} className="image-detail-image" src={image.image} />
      </div>
      <div className="image-detail-content">
        <div className='hello-there'>
          <div className="user-div">
            <p className="feed-container-username"> {image.username.length > 10 ? `${image.username.slice(0, 10)}...` : image.username} </p>
            <div>
              {sessionLinks}
              <button className="image-detail-cancel-button" onClick={() => setShowNestedModal(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>

          </div>

        </div>
        <div className='detail-summary-comments'>
          <p className='detail-summary'>
            {image.summary}
          </p>
          <div>
            <LikeButton image={image} />
            <LikeCounterModal image={image} />
          </div>
          <p>Comments:</p>
          <div className='detail-comments'>
            <DisplayComments image={image} />
          </div>
        </div>
          <div className='detail-comment-form'>
            <CreateCommentForm image={image} />
          </div>
      </div>
    </div>
  )
}

export default ImageDetail;
