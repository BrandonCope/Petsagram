import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from "../../store/comments"

import "./CommentForm.css"

function CreateCommentForm({ image }) {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const new_comment = {
            image_id: image?.id,
            user_id: user?.id,
            content,
        }
        dispatch(createComment(new_comment))
        reset()
    }

    const reset = () => {
        setContent("")
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

export default CreateCommentForm