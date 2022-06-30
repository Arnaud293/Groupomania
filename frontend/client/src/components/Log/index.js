import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Log = (props) => {

    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);

    const handleModals = (e) => {
        if (e.target.id === 'login'){
            setSignUpModal(false);
            setSignInModal(true);
        }

        else if (e.target.id === 'register'){
            setSignUpModal(true);
            setSignInModal(false);
        }
    }

  return (
    <div class='connection-form-container'>
        <div class="btn-container">
            <button id='login' onClick={handleModals} className={signInModal ? 'activ-btn' : 'inactiv-btn'}>
                Connexion
            </button>
            <button id="register" onClick={handleModals} className={signUpModal ? 'activ-btn' : 'inactiv-btn'}>
                Inscription
            </button>
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    </div>
  )
}

export default Log;