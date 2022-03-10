import { Link } from "react-router-dom";

const ProfileFollowers = ({ followers, closeModal }) => {

    return (
        <>
            {followers?.map(follower => (
                <div key={follower.id}>
                    <Link to={`/profiles/${follower.id}`} onClick={()=> closeModal(false)}>
                        {follower.username}
                    </Link>
                </div>
            ))}

        </>

    )

}

export default ProfileFollowers
