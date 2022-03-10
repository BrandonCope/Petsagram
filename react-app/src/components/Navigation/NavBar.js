
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import CreateImageModal from '../CreateImageModal';
import ProfileButton from './ProfileButton';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <NavLink to="/" >
          <li>
            <button className='home-button'><i className="fa-solid fa-house"></i></button>
          </li>
        </NavLink>
        <li>
          <CreateImageModal />
        </li>
        <li>
          <ProfileButton user={user} />
        </li>
      </>
    )
  } else {
    sessionLinks = (
      <>
        {/* <SignupFormModal /> */}
        {/* <LoginFormModal /> */}
      </>
    )

  }


  return (
    <div className='nav-body-div'>
    <nav className='nav-container'>
          <NavLink className="Nav-logo-container" to="/" >
            <h2>Petsagram</h2>
          </NavLink>
      <ul>
        <div className='nav-session-links'>
        {sessionLinks}
        </div>
         {/* <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
      </ul>
    </nav>

    </div>
  );
}

export default NavBar;
