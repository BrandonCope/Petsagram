const LOADUSERFOLLOWS = '/follows/LOADUSERFOLLOWS'

const loadUserFollows = follows => ({ type: LOADUSERFOLLOWS, follows })

export const getUserFollows = (id) => async dispatch => {
    const response = await fetch(`/api/follows/users/${id}`)
    if(response.ok) {
        const follows = await response.json();
        console.log(follows)
        dispatch(loadUserFollows(follows))
        return follows;
    }
    return response;
}

const initialState = {
    followers: {},
    following: {}
}

const userFollowsReducer = (state = initialState, action) => {
    let newState
    let followersList = {}
    let followingList = {}
    switch(action.type) {
        case LOADUSERFOLLOWS: {
            newState = {};
            action.follows.followers.forEach(follower => followersList[follower.id] = follower)
            action.follows.following.forEach(following => followingList[following.id] = following)
            newState.followers = followersList
            newState.following = followingList
            return newState;
        }
        default:
            return state;
    }
}

export default userFollowsReducer