import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../auth/SignUpForm';
// import CreateImage from './CreateImageForm';
// import './CreateImage.css'

function SignupModal({loginForm, setLoginForm}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-form-submit' onClick={() => setShowModal(true)}>Sign-up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm loginForm= {loginForm} setLoginForm={setLoginForm} />
        </Modal>

      )}
    </>
  );
}

export default SignupModal;
