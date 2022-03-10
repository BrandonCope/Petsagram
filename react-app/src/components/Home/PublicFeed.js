import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
// import ImageDetail from "../ImageDetailModal/ImageDetail"
import FeedImageModal from "../FeedImageModal"
import FollowUnfollowModal from "../FollowUnfollowModal"
import './PublicFeed.css'

const PublicFeed = () => {

    const user = useSelector((state) => state.session.user)
    const images = useSelector((state) => state.images)
    const imagesArr = Object.values(images).reverse()
    const filterImagesArr = imagesArr.filter((image) => image?.user_id !== +user?.id)

    return (
        <div>
            {filterImagesArr?.map((image) => (
                <div className="feed-container" key={image.id}>
                    <div className="feed-container-top">
                    <Link className="feed-container-username" to={`/profiles/${image.user_id}`}>
                        {image.username}
                    </Link>
                    <FollowUnfollowModal image={image}/>
                    </div>

                    <img className="feed-images" src={image.image}>
                    </img>
                    <FeedImageModal image={image}/>
                </div>
            ))}
        </div>
    )
}

export default PublicFeed
