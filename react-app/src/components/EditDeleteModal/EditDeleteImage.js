import EditImageModal from "../EditImageModal"
import { useEditModal } from ".";
import { deleteImage } from "../../store/images"
import { useDispatch } from "react-redux";
import { useImageDetailModal } from "../ImageDetailModal";
import './EditDelete.css'


const EditDeleteImage = ({ image, setShowModal }) => {
    const { setShowEditModal } = useEditModal()
    // const { setShowModal } = useImageDetailModal()

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(deleteImage(image.id))
        setShowModal(false)
    }
    return (
        <div className="image-edit-delete-container">
            <EditImageModal image={image} />
            <button className="image-delete-button" onClick={handleClick}>
                Delete
            </button>
            <button className="image-cancel-button" onClick={() => setShowEditModal(false)}>
                Cancel
            </button>
        </div>
    )
}

export default EditDeleteImage;
