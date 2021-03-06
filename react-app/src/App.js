import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar.js';
import Footer from './components/Footer';
import ProfilePage from './components/Profile';
import HomePage from './components/Home';
import SearchPage from './components/SearchBar/SearchPage';
import LandingPage from './components/LandingPage';
import ErrorPage from './components/404';
import { authenticate } from './store/session';
import { getImages } from './store/images';
import { getFollows_user } from './store/follow';
import { getLikes } from './store/likes';
import { getComments } from './store/comments'
import { getUsers } from './store/users';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [notLandingPage, setNotLandingPage] = useState(true)
  const location = useLocation();
  const [loginForm, setLoginForm] = useState(true);


  useEffect(() => {
    if (!user && (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/sign-up")) setNotLandingPage(false)
    else setNotLandingPage(true)
  }, [user, location])

  useEffect(() =>  {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getImages());
      await dispatch(getLikes());
      await dispatch(getComments());
      await dispatch(getUsers())
      await setLoaded(true);
    })();
  }, [dispatch])

  useEffect(() => {
    if (user) {
      dispatch(getFollows_user(user?.id))
    }
  }, [dispatch, user])

  if (!loaded) {
    return null;
  }

  return (loaded &&
    <>
      {notLandingPage && (<NavBar loginForm= {loginForm} setLoginForm={setLoginForm} />)}
      {notLandingPage && (<Footer />)}
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
        <Route path='/' exact={true} >
          {user ? <HomePage /> : <LandingPage loginForm= {loginForm} setLoginForm={setLoginForm} />}
        </Route>
        <Route path='/search' >
          <SearchPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
