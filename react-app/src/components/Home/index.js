import React,{useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getFollows_user } from "../../store/follow"
import FollowFeed from "./FollowFeed"
import PublicFeed from "./PublicFeed"

const HomePage = () => {
    const user = useSelector((state)=> state.session.user)
    const images = useSelector((state)=> state.images)
    const imagesArr = Object.values(images).reverse()
    const dispatch = useDispatch()

    const [publicFeed,setFollowingFeed] = useState(false)
    const follows = useSelector((state) => state.follows.following)
    const followsId = Object.keys(follows)
    // console.log(followsId)

    // useEffect(() => {
    //     dispatch(getFollows_user(user?.id))
    // }, [dispatch])

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
                <h1 className="home-h1">Home Page</h1>
            </div>
            <div>
            <button onClick={showPublic}>
                Public Feed
            </button>
            <button onClick={showFollow}>
                HomeFeed
            </button>
            </div>
            {Feed}
        </div>
    )
}

export default HomePage
