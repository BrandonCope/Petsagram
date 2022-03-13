import { Link, useParams } from "react-router-dom"


const LikeCounterList = ({ imageLikes, setShowModal}) => {


    const {id} = useParams();
    // const history = useHistory();
    console.log(id);
    // let filterArr;
    // if (id !== undefined) {
    //     filterArr = imageLikes?.filter(like => {
    //         return like.user_id !== +id;
    //     })
    // }

    const handleLikeCounter = (e) => {
        if (id !== undefined && +id === +e.target.id) {
            setShowModal(false);
        }
    }

    return (
        <div className="liked-container">
            {imageLikes?.map(imageLike => (
                <div className="like-name-div" key={imageLike.id}>
                    <Link onClick={handleLikeCounter} id={imageLike.user_id} className="like-name-link" to={`/profiles/${imageLike.user_id}`}>
                        {imageLike.username.length > 10 ? `${imageLike.username.slice(0, 10)}...` : imageLike.username}
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default LikeCounterList;
