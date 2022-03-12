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
    const [isLoaded, setIsLoaded] = useState()

    // console.log(followsId)

    const users = useSelector((state) => state.users)
    const usersArr = Object.values(users)

    // const set = new Set()

    let profileUser = usersArr.filter(user => user.id === +id)
    console.log(profileUser)

    if (user?.id === +id) {
        profileUser = [user]
    }


    console.log(isLoaded)

    useEffect(() => {
        window.scrollTo(0, 0)
        if (profileUser.length) {
            dispatch(getUserFollows(id))
            setIsLoaded(true)
        }
        // usersArr?.forEach(({ id }) => (
        //     set.add(id.toString())
        // ))
        // console.log(set)

        // const timer = setTimeout(() => {
        //     if (!set.has(id.toString())) {
        //         history.push('/404')
        //     }
        // }, 1000)

        // return () => clearTimeout(timer)
    }, [dispatch, id,profileUser])


    useEffect(() => {
        if(isLoaded === true){
            if(profileUser.length < 1){
                history.push('/404')
            }
        }
    }, [isLoaded])

    // useEffect(() => {
    //     dispatch(getUserFollows(id))
    //     window.scrollTo(0, 0)
    // }, [dispatch, id])



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
