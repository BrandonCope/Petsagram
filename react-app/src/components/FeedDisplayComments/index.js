import { useSelector } from 'react-redux';


function FeedDisplayComments({image}) {
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments).reverse();
    const imageComments = commentsArr?.filter(comment => comment.image_id === image.id).slice(0,1)

    return (
        <div className=''>
            <h3>Comments:</h3>
        {imageComments?.map(comment => ( 
            <div key={comment.id}>
                <p>{comment.username}</p>
                <p>{comment.content}</p>
            </div>
        ))}
        {/* CommentForm */}
        </div>
    )
}

export default FeedDisplayComments;
