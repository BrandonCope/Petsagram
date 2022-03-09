const LOAD = '/likes/load'
const ADD = '/likes/add'
const REMOVE = 'likes/remove'

const loadLikes = likes => ({ type: LOAD, likes })

const addLike = new_like => ({ type: ADD, new_like })

const removeLike = remove_like => ({ type: REMOVE, remove_like })

export const getLikes = () => async dispatch => {
    const response = await fetch('/api/likes/');
    if(response.ok) {
        const likes = await response.json();
        dispatch(loadLikes(likes));
        return likes
    }
    return response;
}

export const createLike = (payload) => async dispatch => {
    const response = await fetch('/api/likes/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const new_like = await response.json();
        dispatch(addLike(new_like));
        return new_like;
    }
    return response;
}

export const deleteLike = (id) => async dispatch => {
    const response = await fetch(`/api/likes/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        console.log("response ok");
        const message = await response.json();
        dispatch(removeLike(id));
        return message;
    }
    return response;
}

const likesReducer = (state= {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD:
            newState = {...state};
            action.likes.forEach(like => newState[like.id] = like);
            return newState;
        case ADD:
            newState = {...state};
            newState[action.new_like.id] = action.new_like;
            return newState;
        case REMOVE:
            newState = {...state};
            delete newState[action.remove_like];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;
