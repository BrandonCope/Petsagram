import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editComment } from "../../store/comments"
import { useEditModal } from '../CommentEditsModal'

// import "./CommentForm.css"

function EditCommentForm({ comment, setShowModal }) {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const [content, setContent] = useState(comment.content)
    const {setShowEditModal} = useEditModal();

    const handleSubmit = (e) => {
        e.preventDefault()
        const edit_comment = {
            id: comment.id,
            image_id: comment.image_id,
            user_id: user?.id,
            content,
        }
        dispatch(editComment(edit_comment))
        setShowModal(false)
        setShowEditModal(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        className='comment-form-textarea'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="2"
                        column="15"
                        placeholder='Add a comment...'
                        required
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
