import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
// import ImageDetail from "../ImageDetailModal/ImageDetail"
import FeedImageModal from "../FeedImageModal"
import './PublicFeed.css'

const PublicFeed = () => {

    const user = useSelector((state) => state.session.user)
    const images = useSelector((state) => state.images)
    const imagesArr = Object.values(images).reverse()
    const filterImagesArr = imagesArr.filter((image) => image?.user_id !== +user?.id)

    return (
        <div>
            {filterImagesArr?.map((image) => (
                <div className="feed-container">
                    <Link to={`/profiles/${image.user_id}`}>
                        {image.username}
                    </Link>
                    <img className="feed-images" src={image.image}>
                    </img>
                    <FeedImageModal image={image}/>
                </div>
            ))}
        </div>
    )
}

export default PublicFeed
