import { useSelector } from 'react-redux';
import EditDeleteCommentModal from '../CommentEditsModal';


function DisplayComments({image}) {
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const imageComments = commentsArr?.filter(comment => comment.image_id === image.id)
    const user = useSelector(state => state.session.user);

    return (
        <div className=''>
            <h3>Comments:</h3>
        {imageComments?.map(comment => (
            <div key={comment.id}>
                <p>{comment.username}</p>
                <p>{comment.content}</p>
                {(user.id === comment.user_id) && (
                    <EditDeleteCommentModal comment={ comment } />
                )}
            </div>
        ))}
        {/* CommentForm */}
        </div>
    )
}

export default DisplayComments;
