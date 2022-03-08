import React, {useEffects} from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

const ProfilePage = () => {
    const { id } = useParams()

    const images = useSelector((state)=> state.images)
    const imageArr = Object.values(images)
    const filterImageArry= imageArr.filter(({user_id}) => user_id === +id)

    const handleClick = (e) =>{
        // return (
        //     // {Details Page Modal}
        // )
    }

    return (
        <div>
            {filterImageArry.map(({image}) => 
            <img src={`${image}`} onClick = {handleClick}>
            </img>
            )}
        </div>
    )
}

export default ProfilePage