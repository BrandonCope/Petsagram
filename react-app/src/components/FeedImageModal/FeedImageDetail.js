import FollowUnfollowModal from '../FollowUnfollowModal';
import './FeedImageDetail.css'
import { useFeedImageDetailModal } from "./index";
import LikeButton from '../LikeButton';
import LikeCounterModal from '../LikeCounter';
import { Link } from "react-router-dom"
import CreateCommentForm from '../CommentForm';
import DisplayComments from '../DisplayComments';


const FeedImageDetail = ({image}) => {
    const {setShowModal} = useFeedImageDetailModal()

    return (
        <div className="image-detail-component-page">
            <div>
                <img alt='pet' className="image-detail-image" src={image.image}/>
            </div>
            <div className="image-detail-content">
                <div className='image-detail-content-top'>
                    <div className="user-div">
                        <Link className="feed-container-username" to={`/profiles/${image.user_id}`}>
                                {image.username.length > 10 ? `${image.username.slice(0,10)}...` : image.username}
                            </Link>
                        <div>
                            <FollowUnfollowModal image={image}/>
                            <button className="image-detail-cancel-button" onClick={() => setShowModal(false)}><i class="fa-solid fa-xmark"></i></button>
                        </div>

                    </div>
                </div>
                    <div className='detail-summary-comments'>
                        <p className='detail-summary'>
                            {image.summary}
                        </p>
                        <div>
                            <LikeButton image={ image } />
                        <LikeCounterModal image={ image } />
                        </div>
                        <div className='detail-comments'>
                        <p>Comments:</p>
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

export default FeedImageDetail;
