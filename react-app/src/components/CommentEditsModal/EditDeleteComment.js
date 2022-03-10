import EditCommentModal from "../EditCommentModal";
import { useEditModal } from ".";
import { deleteImage } from "../../store/images"
import { useDispatch } from "react-redux";
import { useImageDetailModal } from "../ImageDetailModal";
// import './EditDelete.css'
import { deleteComment } from "../../store/comments";


const EditDeleteComment = ({comment}) => {
    const {setShowEditModal} = useEditModal()
    // const {setShowModal} = useImageDetailModal()

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(deleteComment(comment.id))
        // setShowModal(false)
    }
    return (
        <div className="image-edit-delete-container">
            <EditCommentModal comment={comment} />
            <button className="image-delete-button" onClick={handleClick}>
                Delete
            </button>
            <button className="image-cancel-button" onClick={() => setShowEditModal(false)}>
                Cancel
            </button>
        </div>
    )
}

export default EditDeleteComment;
