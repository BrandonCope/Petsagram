import { Link } from "react-router-dom";

const ProfileFollowing = ({ following, closeModal }) => {
    return (
        <>
            {following?.map(follow => (
                <div>
                    <Link to={`/profiles/${follow.id}`} onClick={()=> closeModal(false)}>
                        {follow.username}
                    </Link>
                </div>
            ))}

        </>

    )

}

export default ProfileFollowing