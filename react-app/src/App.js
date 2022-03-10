import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar.js';
import ProfilePage from './components/Profile';
import HomePage from './components/Home';
import { authenticate } from './store/session';
import { getImages } from './store/images';
import { getFollows_user } from './store/follow';
import { getLikes } from './store/likes';
import { getComments } from './store/comments'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [notLandingPage, setNotLandingPage] = useState(true)
  const location = useLocation()


  useEffect(() => {
    if (!user && (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/sign-up" )) setNotLandingPage(false)
    else setNotLandingPage(true)
  }, [user, location])

  useEffect(()=> {
      dispatch(authenticate());
      dispatch(getImages());
      dispatch(getLikes());
      dispatch(getComments());
      setLoaded(true);
  },[dispatch])

  useEffect(()=> {
    if(user) {
      dispatch(getFollows_user(user?.id))
    }
  },[dispatch,user])

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
        <Route path='/' exact={true} >
          {user ? <HomePage /> : <LoginForm />}
        </Route>
        <Route>
          <h1>404: PAGE NOT FOUND!</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
