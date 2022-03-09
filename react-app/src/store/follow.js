const LOAD = '/follows/load'
const ADD = 'follows/add'
const REMOVE = 'follows/remove'

const loadFollows = follows => ({ type: LOAD, follows })

const addFollow = new_follow => ({ type: ADD, new_follow })

const removeFollow = remove_follow => ({ type: REMOVE, remove_follow})

// export const getFollows = () => async dispatch => {
//     const response = await fetch('/api/follows/')
//     if(response.ok) {
//         const follows = await response.json();
//         dispatch(loadFollows(follows))
//         return follows;
//     }
//     return response;
// }

export const getFollows_user = (id) => async dispatch => {
    const response = await fetch(`/api/follows/${id}`)
    if(response.ok) {
        const follows = await response.json();

        console.log(follows)
        dispatch(loadFollows(follows))
        return follows;
    }
    return response;
}

export const createFollow = (payload) => async dispatch => {
    const response = await fetch('/api/follows/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const new_follow = await response.json();
        dispatch(addFollow(new_follow))
        return new_follow
    }
    return response
}

export const deleteFollow = (payload) => async dispatch => {
    const response = await fetch('/api/follows/', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const remove_follow = await response.json();
        dispatch(removeFollow(remove_follow))
        return remove_follow
    }
    return response
}

const initialState = {
    followers: {},
    following: {}
}

const followsReducer = (state = initialState, action) => {
    let newState;
    let followingList = {}
    switch(action.type) {
        case LOAD:
            newState = {};
            let followersList = {}

            action.follows.followers.forEach(follower => followersList[follower.id] = follower.username)
            action.follows.following.forEach(following => followingList[following.id] = following.username)

            newState.followers = followersList
            newState.following = followingList

            return newState;
        case ADD:
            newState = {...state, followers: {...state.followers}, following: {...state.following}}
            // newState.followers = {...newState.followers, [action.new_follow.followers.id]: action.new_follow.followers}
            action.new_follow.following.forEach(following => newState.following[following.id] = following.username)

            // newState.following = {...newState.following, [action.new_follow.following[0].id]: action.new_follow.following[0]}
            // console.log(action.new_follow.following[0])
            return newState;
        case REMOVE:
            newState = {...state, followers: {...state.followers}}
            
            action.remove_follow.following.forEach(following => followingList[following.id] = following.username)
            newState.following = followingList
            return newState

        default:
            return state;
    }
}

export default followsReducer
