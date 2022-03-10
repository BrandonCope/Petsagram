import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import ProfileFollowing from "./ProfileFollowing";

const ProfileFollowingModal = () => {
    const [showModal, setShowModal] = useState(false);
    const profileFollowing = useSelector((state) => state.profile.following)
    const profileFollowingArr = Object.values(profileFollowing)

    return (
        <div>
            <button
                className="profile-followers-modal-button"
                onClick={() => setShowModal(true)}
                disabled={!profileFollowingArr.length}
            >
                {profileFollowingArr?.length} Following
            </button>
            <div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ProfileFollowing following={profileFollowingArr} closeModal={setShowModal} />
                    </Modal>
                )}

            </div>
        </div>
    )
}

export default ProfileFollowingModal
