import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useLocation, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './auth.css'

const LoginForm = ({loginForm, setLoginForm}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const demo = {
      email: "demo@aa.io",
      password: "password",
    }
    const data = await dispatch(login(demo.email, demo.password));
    if (data) {
      setErrors(data);
    }

  }

  const switchForm = () => {
    setLoginForm(false);
    if (location.pathname !== "/") {
      history.push('/');
    }
  }

  return (
    <div className='login-form-container'>
      <h1 className="app-title">Petsagram</h1>
      <form className='login-form' onSubmit={onLogin}>
        <div className='login-form-errors'>
          {errors.map((error, ind) => (
            <div className='error-message' key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor='email'></label>
          <input
            className='login-input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor='password'></label>
          <input
            className='login-input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
          <button className='login-form-submit' type='submit'>Login</button>
          <button className='login-form-submit' type='button' onClick={handleClick}>Demo</button>
      </form>
      <div className='sign-up-redirect-container'>
        <p>Don't have an account?</p>
        <div className='switchFormButton' onClick={switchForm}>Sign Up</div>
      </div>
    </div>
  );
};

export default LoginForm;
