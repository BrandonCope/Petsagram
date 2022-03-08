import React, {createContext, useContext, useState} from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ImageDetail from '../ImageDetailModal/ImageDetail'
import { Modal } from '../../context/Modal'
// import { EditModalContext } from '../EditDeleteModal'
import ImageDetailModal from '../ImageDetailModal'

export const ImageDetailModalContext = createContext();
export const useImageDetailModal = () => useContext(ImageDetailModalContext)

const ProfilePage = () => {
    const { id } = useParams()
    const images = useSelector((state)=> state.images)
    const imageArr = Object.values(images).reverse()
    const filterImageArry= imageArr.filter(({user_id}) => user_id === +id)

    return (
      <div>
            {filterImageArry.map((image) =>
                <ImageDetailModal image={image} />
            )}
        </div>
    )
}

export default ProfilePage
