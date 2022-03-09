import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {Link, useHistory} from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';

// import LoginFormModal from "../LoginFormModal";
// import SignUpFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };



  return (
    <div className="profileContainer">
      <button className="profileButton" onClick={openMenu}>
      <i class="fa-solid fa-user"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
             <div className='loggedInUserNav'>
                <li className="profileItem" ><Link to={`/profiles/${user.id}`}>{user.username}</Link></li>
                <li className="profileItem">{user.email}</li>
                <li className="profileItem">
                <LogoutButton />
                </li>
        {/* <ProfileButton user={sessionUser} /> */}
           </div>
          {/* {sessionLinks} */}
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
