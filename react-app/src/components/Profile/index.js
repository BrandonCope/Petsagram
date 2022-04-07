import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import ImageDetailModal from '../ImageDetailModal'
import './Profile.css'


import { createFollow, deleteFollow } from '../../store/follow'

import { getUserFollows } from '../../store/profile_follows'
import ProfileFollowersModal from '../ProfileFollwersModal'
import ProfileFollowingModal from '../ProfileFollowingModal'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext)


const ProfilePage = () => {
    const { id } = useParams()
    const history = useHistory()
    const images = useSelector((state) => state.images)
    const imageArr = Object.values(images).reverse()
    const filterImageArry = imageArr.filter(({ user_id }) => user_id === +id)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const follows = useSelector((state) => state.follows.following)
    const followsId = Object.keys(follows)
    const [isLoaded, setIsLoaded] = useState(false)

    const users = useSelector((state) => state.users)
    const usersArr = Object.values(users)

    let profileUser = usersArr?.filter(user => user.id === +id)

    if (user?.id === +id) {
        profileUser = [user]
    }

    if (users[id] === undefined) {
        history.push('/404-Page-Not-Found')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getUserFollows(id))
        // .then(data => { if (!data) history.push('/404-Page-Not-Found') })
    }, [dispatch, id,history])

    useEffect(()=> {
        if (profileUser) {
            setIsLoaded(true)
        }
    },[profileUser])

    const handleClickFollow = async (e) => {
        e.preventDefault()

        const new_follow = {
            target_id: id,
            user_id: user?.id
        }

        await dispatch(createFollow(new_follow))
        await dispatch(getUserFollows(id))
    }

    const handleClickUnfollow = async (e) => {
        e.preventDefault()

        const delete_follow = {
            target_id: id,
            user_id: user?.id
        }

        await dispatch(deleteFollow(delete_follow))
        await dispatch(getUserFollows(id))
    }

    let sessionLinks
    if (user && user?.id !== +id) {
        if (followsId.includes(id.toString())) {
            sessionLinks = (
                <div>
                    <button className="follow-buttons" onClick={handleClickUnfollow}>
                        Unfollow
                    </button>
                </div>
            );
        } else {
            sessionLinks = (
                <div>
                    <button className="follow-buttons" onClick={handleClickFollow}>
                        Follow
                    </button>
                </div>
            )
        }
    }



    return (isLoaded &&
        <div className='profile-div'>
            <div className='profile-top-container'>
                <h2>{profileUser[0]?.username.length > 20 ? `${profileUser[0]?.username.slice(0, 20)}...` : profileUser[0]?.username}</h2>
                {sessionLinks}
                <div className='following-buttons'>
                    <ProfileFollowersModal />
                    <ProfileFollowingModal />
                </div>
            </div>
            <div className='profile-image-matrix'>
                {filterImageArry.map((image) =>
                    <ImageDetailModal key={image.id} image={image} />
                )}

            </div>
        </div>
    )
}

export default ProfilePage
