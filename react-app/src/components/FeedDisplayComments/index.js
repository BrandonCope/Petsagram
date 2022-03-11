import { useSelector } from 'react-redux';
import './feedDisplay.css'

function FeedDisplayComments({image}) {
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments).reverse();
    const imageComments = commentsArr?.filter(comment => comment.image_id === image.id).slice(0,1)

    return (
        <div className='latest-comment-container'>
            <h3>Comments:</h3>
        {imageComments?.map(comment => (
            <div className='comment-container' key={comment.id}>
                <p className='latest-comment-username'>{comment.username}</p>
                <p className='latest-comment-content'>{comment.content}</p>
            </div>
        ))}
        {/* CommentForm */}
        </div>
    )
}

export default FeedDisplayComments;
