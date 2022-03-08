import React, { useState } from "react"
import {createImage} from '../../store/images'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

function CreateImage({setShowModal}) {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const user = useSelector((state) => state.session.user?.id);
    const history = useHistory()


    const updateImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setImageUrl(file);
    }

    const handleSubmit = async e => {
       try{
           e.preventDefault();

            const formData = new FormData()
            // console.log("imageUrl", {imageUrl})
            formData.append("image", imageUrl)
            // console.log("imageU", formData['file'])
            // formData.append("url", imageUrl.file?.name)
            formData.append('summary', summary)
            formData.append('user_id', user)
            console.log(formData)
            console.log(imageUrl)

            // const new_image = {
            //     // image: imageUrl,
            //     summary: summary,
            //     user_id: user
            // }

            dispatch(createImage(formData))
            setShowModal(false)
            history.push(`/profiles/${user}`)

       } catch(error) {
           console.log(error)
       }
    }

    return (
        <div className="image-post-form">
            <form onSubmit={handleSubmit} >
                <h2>Post Your Image</h2>
                <input
                type='file'
                accept="image/*"
                name="image"
                onChange={updateImage}
                />
                {/* {(imageLoading)} */}
                <textarea className="summary-textarea"
                placeholder="Description..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows='7'
                cols='45'
                maxLength='255'
                required
                />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
    )
}

export default CreateImage;
