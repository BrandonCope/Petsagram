import { Link } from "react-router-dom"

const LikeCounterList = ({ imageLikes }) => {


    return (
        <div className="liked-container">
            {imageLikes?.map(imageLike => (
                <div className="like-name-div" key={imageLike.id}>
                    <Link className="like-name-link" to={`/profiles/${imageLike.user_id}`}>
                        {imageLike.username.length > 10 ? `${imageLike.username.slice(0, 10)}...` : imageLike.username}
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default LikeCounterList;
