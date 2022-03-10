import React, { useState } from "react"
import {createImage} from '../../store/images'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import './CreateImage.css'

function CreateImage({setShowModal}) {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [summary, setSummary] = useState('');
    // const [imageLoading, setImageLoading] = useState(false);
    const user = useSelector((state) => state.session.user?.id);
    const history = useHistory()


    const updateImage = (e) => {
        const file = e.target.files[0];
        setImageUrl(file);
    }

    const handleSubmit = async e => {

           e.preventDefault();

            const formData = new FormData()
            formData.append("image", imageUrl)
            formData.append('summary', summary)
            formData.append('user_id', user)


            dispatch(createImage(formData))
            setShowModal(false)
            history.push(`/profiles/${user}`)
    }

    return (
        <div className="image-post-form-container">
            <form className="post-form" onSubmit={handleSubmit} >
                <h2>Post Your Image</h2>
                <input
                id="file-upload"
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
                <button className="post-button" type='submit'>Submit</button>
                <button className="post-button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default CreateImage;
