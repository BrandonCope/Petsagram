import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
// import CreateImage from './CreateImageForm';
// import './CreateImage.css'

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-form-submit' onClick={() => setShowModal(true)}>Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>

      )}
    </>
  );
}

export default LoginModal;
