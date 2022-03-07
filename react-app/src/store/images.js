const LOAD = '/images/load'
const ADD = '/images/add'
const UPDATE = '/images/edit'
const REMOVE = '/images/remove'

const loadImages = images => ({ type: LOAD, images })

const addImage = new_image => ({ type: ADD, new_image })

const updateImage = update_image => ({ type: UPDATE, update_image })

const removeImage = remove_image => ({ type: REMOVE, remove_image })

export const getImages = () => async dispatch => {
    const response = await fetch('/api/images/');
    if(response.ok) {
        const images = await response.json();
        dispatch(loadImages(images));
        return images;
    }
    return response;
}

export const createImage = (payload) => async dispatch => {
    const response = await fetch('/api/images/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const new_image = await response.json();
        dispatch(addImage(new_image));
        return new_image;
    }
    return response;
}

export const editImage = (payload) => async dispatch => {
    const response = await fetch(`/api/images/${payload.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const edit_image = await response.json();
        dispatch(updateImage(edit_image));
        return edit_image;
    }
    return response;
}

export const deleteImage = (id) => async dispatch => {
    const response = await fetch(`/api/images/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        const message = await response.json();
        dispatch(removeImage(id));
        return message;
    }
    return response;
}

const imagesReducer = (state= {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD:
            newState = {...state};
            action.images.forEach(image => newState[image.id] = image);
            return newState;
        case ADD:
            newState = {...state};
            newState[action.new_image.id] = action.new_image;
            return newState;
        case UPDATE:
            newState = {...state}
            newState[action.edit_image.id] = action.edit_image;
            return newState;
        case REMOVE:
            newState = {...state};
            delete newState[action.delete_image.id];
            return newState;
        default:
            return state;
    }
}

export default imagesReducer;