import EditImageModal from "../EditImageModal"

const EditDeleteImage = ({image}) => {
    return (
        <div>
            <EditImageModal image={image} />
            <button>
                Delete
            </button>
            <button>
                Cancel
            </button>
        </div>
    )
}

export default EditDeleteImage;
