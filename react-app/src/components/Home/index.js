import React,{useState} from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import PublicFeed from "./PublicFeed"

const HomePage = () => {
    const user = useSelector((state)=> state.session.user)
    const images = useSelector((state)=> state.images)
    const imagesArr = Object.values(images).reverse()

    const [publicFeed,setFollowingFeed] = useState(false)

    let Feed;

    if (!publicFeed){
        Feed = (
            <div>
                <PublicFeed />
            </div>
        )
    }
    else if (publicFeed){
        Feed = (
            <div>
                {/* Following Feed Component */}
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
        <div>
            <div>
                <h1>Home Page</h1>
            </div>
            <button onClick={showPublic}>
                Public Feed
            </button>
            <button onClick={showFollow}>
                HomeFeed
            </button>
            {Feed}
        </div>
    )
}

export default HomePage