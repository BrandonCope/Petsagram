import { Link } from "react-router-dom";

const ProfileFollowers = ({ followers, closeModal }) => {
    console.log(followers)
    return (
        <>
            {followers?.map(follower => (
                <div>
                    <Link to={`/profiles/${follower.id}`} onClick={()=> closeModal(false)}>
                        {follower.username}
                    </Link>
                </div>
            ))}

        </>

    )

}

export default ProfileFollowers