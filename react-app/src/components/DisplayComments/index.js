import { useSelector } from 'react-redux';
import EditDeleteCommentModal from '../CommentEditsModal';
import "./DisplayComments.css"


function DisplayComments({image}) {
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const imageComments = commentsArr?.filter(comment => comment.image_id === image.id)
    const user = useSelector(state => state.session.user);

    return (
        <div className=''>

            {imageComments?.map(comment => (
                <div key={comment.id}>

                    <div className="comment-user-container">
                    <p className="comment-username">{comment.username.length > 10 ? `${comment.username.slice(0,10)}...` : comment.username}</p>
                    {(user?.id === comment.user_id) && (
                        <EditDeleteCommentModal comment={ comment } />
                    )}
                    </div>
                    <p className="comment-content">{comment.content}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayComments;
