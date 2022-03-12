import React, { createContext, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
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
    const images = useSelector((state) => state.images)
    const imageArr = Object.values(images).reverse()
    const filterImageArry = imageArr.filter(({ user_id }) => user_id === +id)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const follows = useSelector((state) => state.follows.following)
    const followsId = Object.keys(follows)
    // console.log(followsId)

    const users = useSelector((state) => state.users)
    const usersArr = Object.values(users)

    const profileUser = usersArr.filter(user => user.id === +id)
    console.log(profileUser)

    useEffect(() => {
        dispatch(getUserFollows(id))
        window.scrollTo(0, 0)
    }, [dispatch, id])



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

    // console.log(followsId.includes(JSON.stringify(id)))
    // console.log(user?.id !== id)


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



    return (
        <div className='profile-div'>
            <div className='profile-top-container'>
                <h2>{profileUser[0]?.username.length > 10 ? `${profileUser[0]?.username.slice(0, 10)}` : profileUser[0]?.username}</h2>
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
