import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import FeedImageModal from "../FeedImageModal"
import FollowUnfollowModal from "../FollowUnfollowModal"
import './PublicFeed.css'
import CreateCommentForm from "../CommentForm"
import FeedDisplayComments from "../FeedDisplayComments";
import EditDeleteModal from '../EditDeleteModal';
import { useImageDetailModal } from "../ImageDetailModal";

const PublicFeed = () => {
    const [showModal, setShowModal] = useState(false);
    // const {setShowModal} = useImageDetailModal();
    const user = useSelector((state) => state.session.user)
    const images = useSelector((state) => state.images)
    const imagesArr = Object.values(images).reverse()
    // const filterImagesArr = imagesArr.filter((image) => image?.user_id !== +user?.id)



    return (
        <div>
            <h2 >Public:</h2>
            {imagesArr?.map((image) => (
                <div className="feed-container" key={image.id}>
                    <div className="feed-container-top">
                        <Link className="feed-container-username" to={`/profiles/${image.user_id}`}>
                            {image.username}
                        </Link>
                        {(user.id === image.user_id) && (
                            <EditDeleteModal image={image} setShowModal={setShowModal} />
                        )}
                        {(user.id !== image.user_id) && (
                            <FollowUnfollowModal image={image} />
                        )}
                    </div>

                    <img alt={image.summary} className="feed-images" src={image.image}>
                    </img>
                    <div className="feed-container-lower">
                        <FeedImageModal image={image} />
                        <FeedDisplayComments image={image} />
                    </div>
                    <CreateCommentForm image={image} />
                </div>
            ))}
        </div>
    )
}

export default PublicFeed
