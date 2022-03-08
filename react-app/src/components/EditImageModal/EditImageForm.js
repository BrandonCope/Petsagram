import React, { useState } from "react"
import {editImage} from '../../store/images'
import { useDispatch} from 'react-redux'

function EditImage() {
    const dispatch = useDispatch();;
    const [summary, setSummary] = useState('');

    const handleSubmit = async e => {
       try{
           e.preventDefault();

            const edit_image = {
                summary: summary,
            }
            dispatch(editImage(edit_image))
       } catch(error) {
           console.log(error)
       }
    }

    return (
        <div className="image-post-form">
            <form onSubmit={handleSubmit} >
                <h2>Post Your Image</h2>
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

export default EditImage;