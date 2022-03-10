import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import ProfileFollowers from "./ProfileFollowers";

const ProfileFollowersModal = () => {
    const [showModal, setShowModal] = useState(false);
    const profileFollows = useSelector((state) => state.profile.followers)
    const profileFollowsArr = Object.values(profileFollows)

    return (
        <div>
            <button
                className="profile-followers-modal-button"
                onClick={() => setShowModal(true)}
                disabled={!profileFollowsArr.length}
            >
                {profileFollowsArr?.length} Followers
            </button>
            <div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ProfileFollowers followers={profileFollowsArr} closeModal={setShowModal} />
                    </Modal>
                )}

            </div>
        </div>
    )
}

export default ProfileFollowersModal
