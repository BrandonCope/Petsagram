import FollowUnfollowModal from '../FollowUnfollowModal';
import './FeedImageDetail.css'
import { useImageDetailModal } from "./index";
import LikeButton from '../LikeButton';
import LikeCounterModal from '../LikeCounter';
import { Link } from "react-router-dom"
import CreateCommentForm from '../CommentForm';
import DisplayComments from '../DisplayComments';


const FeedImageDetail = ({image}) => {
    const {setShowModal} = useImageDetailModal()

    return (
        <div className="image-detail-component-page">
            <div>
                <img alt='pet' className="image-detail-image" src={image.image}/>
            </div>
            <div className="image-detail-content">
                <div className="user-div">
                <Link className="feed-container-username" to={`/profiles/${image.user_id}`}>
                        {image.username.slice(0,10)}
                    </Link>
                    <FollowUnfollowModal image={image}/>
                    <button onClick={() => setShowModal(false)}>X</button>

                </div>
                <div>
                    <p className='detail-summary'>
                        {image.summary}
                    </p>
                    <div>
                        <LikeButton image={ image } />
                    {/* <Comments /> */}
                    <LikeCounterModal image={ image } />
                    </div>
                    <div className='detail-comments'>
                        <DisplayComments image={image} />
                    </div>
                    <div className='detail-comment-form'>
                        <CreateCommentForm image={image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedImageDetail;
