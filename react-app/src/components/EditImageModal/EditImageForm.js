import React, { useState, useEffect } from "react"
import {editImage} from '../../store/images'
import { useDispatch} from 'react-redux'
import { useEditModal } from '../EditDeleteModal'
import './EditImage.css'

function EditImageForm({image, setShowModal}) {
    const dispatch = useDispatch();;
    const [summary, setSummary] = useState(image.summary);
    const { setShowEditModal } = useEditModal();



    const id = image.id;
    const handleSubmit = async e => {
       try{
           e.preventDefault();

            const edit_image = {
                summary: summary,
            }
            dispatch(editImage(edit_image, id))

       } catch(error) {
           console.log(error)
       }
       setShowModal(false)
       setShowEditModal(false)
    }

    return (
        <div className="image-edit-form-container">
            <form className="image-edit-form" onSubmit={handleSubmit} >
                <h2>Edit Your Summary</h2>
                <textarea className="summary-textarea"
                placeholder={"Description..."}
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

export default EditImageForm;
