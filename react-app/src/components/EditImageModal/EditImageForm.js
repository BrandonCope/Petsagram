import React, { useState, useEffect } from "react"
import {editImage} from '../../store/images'
import { useDispatch} from 'react-redux'
import { useEditModal } from '../EditDeleteModal'

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
        <div className="image-post-form">
            <form onSubmit={handleSubmit} >
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
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
    )
}

export default EditImageForm;
