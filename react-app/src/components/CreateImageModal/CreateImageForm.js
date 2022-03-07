import React, { useState } from "react"
import {createImage} from '../../store/images'
import { useDispatch, useSelector } from 'react-redux'

function CreateImage() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const user = useSelector((state) => state.session.user);


    const updateImage = (e) => {
        const file = e.target.files[0];
        setImageUrl(file);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const new_image = {
            image: imageUrl,
            summary: summary,
            user
        }
    }

    return (
        <div className="image-post-form">
            <form >
                <h2>Post Your Image</h2>
                <input
                type='file'
                accept="image/*"
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
        </div>
    )
}

export default CreateImage;
