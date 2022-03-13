import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useLocation, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({loginForm, setLoginForm}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  

  
  useEffect(() => {
    let errors = []
    if (username.length >= 40) {
        errors.push('Username: Max length of 40 characters reached.')
    }
    if (email.length >= 255) {
        errors.push(['Email: Max length of 255 characters reached.'])
    }
    setErrors(errors)
}, [username,email])

  const onSignUp = async (e) => {
    e.preventDefault();

    const confirm_password = repeatPassword
    const data = await dispatch(signUp(username, email, password, confirm_password));
    if (data) {
      let errors = []
      errors.push(...data)
      setErrors(errors)
      if (password !== confirm_password) {
        setPassword("");
        setRepeatPassword("")
      }
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const switchForm = () => {
    setLoginForm(true);
    if (location.pathname !== "/") {
      history.push('/');
    }
  }

  return (
      <div className='signup-form-container'>
        <h1 className="app-title">Petsagram</h1>
        <form className='signup-form' onSubmit={onSignUp}>
          <div className='signup-form-errors'>
            {errors.map((error, ind) => (
              <div className='error-message' key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label></label>
            <input
              placeholder='Username'
              className='login-input'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              maxLength='40'
            ></input>
          </div>
          <div>
            <label></label>
            <input
              placeholder='Email'
              className='login-input'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              maxLength='255'
            ></input>
          </div>
          <div>
            <label></label>
            <input
              placeholder='Password'
              className='login-input'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              maxLength='255'
            ></input>
          </div>
          <div>
            <label></label>
            <input
              placeholder='Confirm Password'
              className='login-input'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              maxLength='255'
            // required={true}
            ></input>
          </div>
          <button className='login-form-submit' type='submit'>Sign Up</button>
        </form>
        <div className='login-redirect-container'>
          <p>Have an account?</p>
          <div className='switchFormButton' onClick={switchForm}>Login </div>
        </div>
      </div>
  );
};

export default SignUpForm;
