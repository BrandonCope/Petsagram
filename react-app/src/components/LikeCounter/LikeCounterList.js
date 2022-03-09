import { Link } from "react-router-dom"

const LikeCounterList = ({imageLikes}) => {
    console.log("image likes in list view ", imageLikes)


    return (
        <>
        {imageLikes?.map(imageLike => (
            <div>
                <Link to={`/profiles/${imageLike.user_id}`}>
                        {imageLike.username}
                </Link>
            </div>
        ))}
        </>
    )

}

export default LikeCounterList;
