const LOAD = '/comments/load'
const ADD = '/comments/add'
const UPDATE = '/comments/edit'
const REMOVE = '/comments/remove'

const loadComments = comments => ({ type: LOAD, comments })

const addComment = new_comment => ({ type: ADD, new_comment })

const updateComment = edit_comment => ({ type: UPDATE, edit_comment })

const removeComment = remove_comment => ({ type: REMOVE, remove_comment })

export const getComments = () => async dispatch => {
    const response = await fetch('/api/comments/');
    if(response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments));
        return comments;
    }
    return response;
}

export const createComment = (payload) => async dispatch => {
    const response = await fetch('/api/comments/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const new_comment = await response.json();
        dispatch(addComment(new_comment));
        return new_comment;
    } else if (response.status < 500) {
        const data = await response.json();
        console.log(data);
        if (data.errors) {
            return data;
        }
    }
    // return response;
    const data = await response.json();
    console.log(data);
}

export const editComment = (payload) => async dispatch => {
    const response = await fetch(`/api/comments/${payload.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const edit_comment = await response.json();
        dispatch(updateComment(edit_comment));
        return edit_comment;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    }
    return response;
}


export const deleteComment = (id) => async dispatch => {
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        const message = await response.json();
        dispatch(removeComment(id));
        return message;
    }
    return response;
}

const commentsReducer = (state= {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD:
            newState = {...state};
            action.comments.forEach(comment => newState[comment.id] = comment);
            return newState;
        case ADD:
            newState = {...state};
            newState[action.new_comment.id] = action.new_comment;
            return newState;
        case UPDATE:
            newState = {...state}
            newState[action.edit_comment.id] = action.edit_comment;
            return newState;
        case REMOVE:
            newState = {...state};
            delete newState[action.remove_comment];
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;
