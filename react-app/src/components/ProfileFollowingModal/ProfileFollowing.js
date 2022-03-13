import { Link } from "react-router-dom";

const ProfileFollowing = ({ following, closeModal }) => {
    return (
        <div className="liked-container">
            {following?.map(follow => (
                <div className="like-name-div" key={follow.id}>
                    <Link className="like-name-link" to={`/profiles/${follow.id}`} onClick={() => closeModal(false)}>
                        {follow.username.length > 10 ? `${follow.username.slice(0, 10)}...` : follow.username}
                    </Link>
                </div>
            ))}

        </div>

    )

}

export default ProfileFollowing
