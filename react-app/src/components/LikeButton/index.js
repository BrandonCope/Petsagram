import React, { useEffect, useState } from "react";
import {createLike, deleteLike} from '../../store/likes'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LikeButton = ({ image }) => {
    const user = useSelector((state) => state.session.user);
    const stateLikes = useSelector((state) => state.likes);
    const likes = Object.values(stateLikes);
    const dispatch = useDispatch();
    const history = useHistory();

    let imageLikes;
    let userLike;
    if (likes) {
      imageLikes = likes?.filter((like) => like.image_id === image.id);
      userLike = imageLikes?.find((imageLike) => imageLike.user_id === user?.id);
    }
    useEffect(() => {

      if (userLike) {
        setHeart(true);
      } else {
        setHeart(false);
      }
    }, [userLike])

    const [heart, setHeart] = useState(false);

    const handleLike = () => {
      if(user) {
        if (!heart) {
          const payload = {
            user_id: user.id,
            image_id: image.id,
          };
          dispatch(createLike(payload));
          setHeart(true);
        } else {
          dispatch(deleteLike(userLike.id))
          setHeart(false);
        }
      } else {
        history.push('/')
      }
    };

    let heartIcon;
    if (heart) {
      heartIcon = <i className="fa-solid fa-heart"></i>;
    } else {
      heartIcon = <i className="fa-regular fa-heart"></i>;
    }

    return (
        <button className="feed-image-like-button" onClick={handleLike}>
            {heartIcon}
        </button>
    )

}

export default LikeButton;
