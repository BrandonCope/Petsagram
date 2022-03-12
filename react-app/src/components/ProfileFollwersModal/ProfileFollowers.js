import { Link } from "react-router-dom";

const ProfileFollowers = ({ followers, closeModal }) => {

    return (
        <div className="liked-container">
            {followers?.map(follower => (
                <div className="like-name-div" key={follower.id}>
                    <Link className="like-name-link" to={`/profiles/${follower.id}`} onClick={()=> closeModal(false)}>
                        {follower.username.length > 10 ? `${follower.username.slice(0,10)}...` : follower.username}
                    </Link>
                </div>
            ))}

        </div>

    )

}

export default ProfileFollowers
