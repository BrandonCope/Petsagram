import React, { useState } from "react"
import FollowFeed from "./FollowFeed"
import PublicFeed from "./PublicFeed"
import './PublicFeed.css'

const HomePage = () => {
    const [publicFeed, setFollowingFeed] = useState(false)


    let Feed;

    if (!publicFeed) {
        Feed = (
            <div>
                <PublicFeed />
            </div>
        )
    }
    else if (publicFeed) {
        Feed = (
            <div>
                <FollowFeed />
            </div>
        )
    }

    const showPublic = () => {
        setFollowingFeed(false)
    }

    const showFollow = () => {
        setFollowingFeed(true)
    }

    return (
        <div className="body-div">
            <div className="feed-button-container">
                <button className="feed-button" onClick={showPublic}>
                    Public Feed
                </button>
                <button className="feed-button" onClick={showFollow}>
                    Following
                </button>
            </div>
            {Feed}
        </div>
    )
}

export default HomePage
