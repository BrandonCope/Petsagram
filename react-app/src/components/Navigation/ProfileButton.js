import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

// import LoginFormModal from "../LoginFormModal";
// import SignUpFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
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

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logout());
  //   history.push('/')
  // };



  return (
    <div className="profileContainer">
      <button className="profileButton" onClick={openMenu}>
      <i className="fa-solid fa-user"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
             <div className='loggedInUserNav'>
                <li className="profileItem">Hello, {user.username}!</li>
                <li className="profileItem" ><Link to={`/profiles/${user.id}`}>My Profile</Link></li>
                <li className="profileItem">{user.email}</li>
                <li className="profileItem">
                <LogoutButton className='logout-button' />
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
