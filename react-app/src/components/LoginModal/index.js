import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
// import CreateImage from './CreateImageForm';
// import './CreateImage.css'

function LoginModal({loginForm, setLoginForm}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-form-submit' onClick={() => setShowModal(true)}>Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm loginForm= {loginForm} setLoginForm={setLoginForm} />
        </Modal>

      )}
    </>
  );
}

export default LoginModal;
