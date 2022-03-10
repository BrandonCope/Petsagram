import { Link } from "react-router-dom"

const LikeCounterList = ({imageLikes}) => {


    return (
        <>
        {imageLikes?.map(imageLike => (
            <div key={imageLike.id}>
                <Link to={`/profiles/${imageLike.user_id}`}>
                        {imageLike.username}
                </Link>
            </div>
        ))}
        </>
    )

}

export default LikeCounterList;
