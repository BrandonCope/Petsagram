import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ImageDetail from '../ImageDetailModal/ImageDetail'
import { Modal } from '../../context/Modal'

const ProfilePage = () => {
    const { id } = useParams()
    const [showModal, setShowModal] = useState(false);
    const images = useSelector((state)=> state.images)
    const imageArr = Object.values(images).reverse()
    const filterImageArry= imageArr.filter(({user_id}) => user_id === +id)

    return (
        <div>
            {filterImageArry.map((image) =>
            <div key={image.id}>
            <button className='followModalButton' onClick={() => setShowModal(true)}><img src={image.image}>
            </img></button>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageDetail image={image} setShowModal={setShowModal} />
                </Modal>
            )}
            </div>
            )}
        </div>
    )
}

export default ProfilePage
