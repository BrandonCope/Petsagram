import React,{useState} from "react"
// import { useDispatch, useSelector } from "react-redux"
import FollowFeed from "./FollowFeed"
import PublicFeed from "./PublicFeed"
import './PublicFeed.css'

const HomePage = () => {
    // const user = useSelector((state)=> state.session.user)
    // const images = useSelector((state)=> state.images)
    // const imagesArr = Object.values(images).reverse()
    // const dispatch = useDispatch()

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
            <div>
                {/* <h1 className="home-h1"></h1> */}
            </div>
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
