import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editComment } from "../../store/comments"
import { useEditModal } from '../CommentEditsModal'

// import "./CommentForm.css"

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
        }
    }, [content])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <textarea
                        className='comment-form-textarea'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="2"
                        column="15"
                        placeholder='Add a comment...'
                        // required
                        maxLength="255"
                    >

                    </textarea>

                </div>
                <div>
                    <button>
                        Post
                    </button>

                </div>
            </form>
        </div>
    )

}

export default EditCommentForm
