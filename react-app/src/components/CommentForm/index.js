import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createComment } from "../../store/comments"

import "./CommentForm.css"

function CreateCommentForm({ image }) {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const history = useHistory();
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()
        if(user) {

            const new_comment = {
                image_id: image?.id,
                user_id: user?.id,
                content,
            }
            dispatch(createComment(new_comment))
            reset()
        } else {
            history.push('/')
        }
    }

    useEffect(() => {
        if (content.length >= 255) {
            setErrors(['Max length of 255 characters reached.'])
        }
    }, [content])

    const reset = () => {
        setContent("")
    }

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
