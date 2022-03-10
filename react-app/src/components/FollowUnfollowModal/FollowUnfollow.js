import EditImageModal from "../EditImageModal"
import { deleteImage } from "../../store/images"
import { useDispatch, useSelector } from "react-redux";
import { useFollowUnfollowModal } from ".";
import { createFollow, deleteFollow } from "../../store/follow";
import { getUserFollows } from "../../store/profile_follows";



const FollowUnfollow = ({image}) => {
    const {setShowModal} = useFollowUnfollowModal()
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const follow = useSelector((state) => state.follows)
    const follows = useSelector((state) => state.follows.following)
    const followsId = Object.keys(follows)
    console.log("=====================",follow)

    const handleClickFollow = async (e) => {
        e.preventDefault()

       const new_follow = {
            target_id: image?.user_id,
            user_id: user?.id
        }

        await dispatch(createFollow(new_follow))
        await dispatch(getUserFollows(image?.user_id))
    }

    const handleClickUnfollow = async (e) => {
        e.preventDefault()

        const delete_follow = {
            target_id: image?.user_id,
            user_id: user?.id
        }

        await dispatch(deleteFollow(delete_follow))
        await dispatch(getUserFollows(image?.user_id))
    }

    let sessionLinks
    if (followsId.includes(JSON.stringify(image?.user_id))) {
        sessionLinks = (
            <div>
                <button onClick={handleClickUnfollow}>
                Unfollow
                </button>
            </div>
        );
    } else {
        sessionLinks = (
            <div>
                 <button onClick={handleClickFollow}>
                Follow
                 </button>
            </div>
        )
    }


    return (
        <div>
            {sessionLinks}
            <button onClick={() => setShowModal(false)}>
                Cancel
            </button>
        </div>
    )
}

export default FollowUnfollow;
