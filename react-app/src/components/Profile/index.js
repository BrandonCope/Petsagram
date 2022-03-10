import React, { createContext, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageDetailModal from '../ImageDetailModal'
import './Profile.css'
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


    useEffect(() => {
        dispatch(getUserFollows(id))
    }, [dispatch,id])

    return (
        <div className='profile-div'>
            <h2>{filterImageArry[0]?.username}</h2>
            <ProfileFollowersModal />
            <ProfileFollowingModal />
            {filterImageArry.map((image) =>
                <ImageDetailModal key={image.id} image={image} />
            )}
        </div>
    )
}

export default ProfilePage
