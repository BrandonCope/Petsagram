import EditDeleteModal from "../EditDeleteModal"
import './ImageDetail.css'
import { useImageDetailModal } from "./index";
import { useSelector } from 'react-redux';
import LikeButton from "../LikeButton";
import LikeCounterModal from "../LikeCounter";
import FollowUnfollowModal from "../FollowUnfollowModal";
import DisplayComments from "../DisplayComments";
import CreateCommentForm from "../CommentForm";
import { useHistory } from "react-router-dom";

const ImageDetail = ({image}) => {
    const {setShowModal} = useImageDetailModal()
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    let sessionLinks;
    if(user) {
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
                <img alt={image.summary} className="image-detail-image" src={image.image}/>
            </div>
            <div className="image-detail-content">
                <div className="user-div">
                    <p> {image.username} </p>
                    <div>
                      {sessionLinks}
                      <button className="image-detail-cancel-button" onClick={() => setShowModal(false)}><i class="fa-solid fa-xmark"></i></button>
                    </div>

                </div>
                <div>
                    <p>
                        {image.summary}
                    </p>
                    <div>
                      <LikeButton image={ image } />
                      <LikeCounterModal image={ image } />
                    </div>
                    <div>
                      <DisplayComments image={ image }/>
                    </div>
                    <div>
                      <CreateCommentForm image = {image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetail;
