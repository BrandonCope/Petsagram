import EditImageModal from "../EditImageModal"
import { useEditModal } from ".";
import { deleteImage } from "../../store/images"
import { useDispatch } from "react-redux";
import { useImageDetailModal } from "../ImageDetailModal";



const EditDeleteImage = ({image}) => {
    const {setShowEditModal} = useEditModal()
    const {setShowModal} = useImageDetailModal()

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(deleteImage(image.id))
        setShowModal(false)
    }
    return (
        <div>
            <EditImageModal image={image} />
            <button onClick={handleClick}>
                Delete
            </button>
            <button onClick={() => setShowEditModal(false)}>
                Cancel
            </button>
        </div>
    )
}

export default EditDeleteImage;
