
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <NavLink to="/" >
          <li>
            <button>Home</button>
          </li>
        </NavLink>
        {/* </Image Modal user={user} */}
        {/* </ProfileButton user = {user} */}
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
    <nav>
      <ul>
        <li>
          <NavLink to="/" >
            <button>Logo</button>
          </NavLink>
        </li>
        {sessionLinks}
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
        </li>
        <li>
          <LogoutButton />
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
