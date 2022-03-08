import EditDeleteModal from "../EditDeleteModal"
import './ImageDetail.css'


const ImageDetail = ({image}) => {

    console.log(image);

    return (
        <div className="image-detail-component-page">
            <div>
                <img className="image-detail-image" src={image.image}/>
            </div>
            <div>
                <p>
                    {image.username}
                </p>
                    <EditDeleteModal image={image} />
                <p>
                    {image.summary}
                </p>
                <div>
                {/* <Comments /> */}
                </div>
            </div>
        </div>
    )
}

export default ImageDetail;
