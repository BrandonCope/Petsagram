import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar.js';
import ProfilePage from './components/Profile';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import { getImages } from './store/images';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [notLandingPage, setNotLandingPage] = useState(true)
  const location = useLocation()
  // console.log(location)

  useEffect(() => {
    if (!user && (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/sign-up" )) setNotLandingPage(false)
    else setNotLandingPage(true)
  }, [user, location])

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getImages());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {notLandingPage && (<NavBar />)}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/profiles/:id'>
          <ProfilePage />
          </Route>
        {/* <Route path='/users' exact={true} >
          <UsersList />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route>
          <h1>404: PAGE NOT FOUND!</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
