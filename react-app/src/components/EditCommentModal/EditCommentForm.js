import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editComment } from "../../store/comments"
import { useEditModal } from '../CommentEditsModal'
import './EditComments.css'

function EditCommentForm({ comment, setShowModal }) {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const [content, setContent] = useState(comment.content)
    const {setShowEditModal} = useEditModal();
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const edit_comment = {
            id: comment.id,
            image_id: comment.image_id,
            user_id: user?.id,
            content,
        }
        const data = await dispatch(editComment(edit_comment));
        if (data.errors) {
            setErrors(data.errors);
        } else {
            setShowModal(false)
            setShowEditModal(false)
        }
    }

    useEffect(() => {
        if (content.length >= 255) {
            setErrors(['Max length of 255 characters reached.'])
        } else {
            setErrors([])
        }
    }, [content])

    return (
        <div className="comment-edit-form-container">
            <form className="comment-edit-form" onSubmit={handleSubmit}>
                <h2>Edit Your Comment</h2>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div className='error-message' key={ind}>{error}</div>
                    ))}
                </div>
                <textarea
                    className='edit-comment-textarea'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Add a comment...'
                    rows='7'
                    cols='45'
                    maxLength='255'
                />
                <button className="post-button" type='submit'>Submit</button>
                <button className="post-button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
        </div>
    )

}

export default EditCommentForm
