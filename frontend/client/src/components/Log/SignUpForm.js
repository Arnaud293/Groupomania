import React, { useState } from 'react';
import axios from 'axios';
import SignInForm from './SignInForm';

const SignUpForm = () => {
  
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [controlPassword, setControlPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const pseudoError = document.querySelector('.pseudo-error');
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');
    const passwordConfirmError = document.querySelector('.password-conf-error');

    // passwordConfirmError.innerHTML = ' ';

    if(password !== controlPassword){
      passwordConfirmError.innerHTML =  'Les mots de passe ne correspondent pas'
    } else {
      await axios ({
        method : "post",
        url : `${process.env.REACT_APP_API_URL}api/user/register`,
        data : {
          pseudo,
          email,
          password
        }
      })
      .then((res) =>{
        if(res.data.errors){
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          setFormSubmit(true);
          alert('Inscription réussie !')
        }
      })
      .catch((err) => {
        if(err.response.data.errors){
          pseudoError.innerHTML = err.response.data.errors.pseudo;
          emailError.innerHTML = err.response.data.errors.email;
          passwordError.innerHTML = err.response.data.errors.password;
        }
         console.log(err)
        });
    }

  }

  return (
    <>
    {formSubmit ? (
      <>
      <SignInForm />
      </>
    ) : (
    <div class="connection-form-card">
        <form onSubmit={handleRegister} id='sign-up-form' class="connection-form">
            <label htmlFor='email'>Email</label>
            <input class="input" type="text" name="email" id='email' onChange={(e) => setEmail(e.target.value)}/>
            <div className='email-error'></div>
            <br/>
            <label htmlFor="pseudo">Pseudo</label>
            <input class='input' type="text" name="pseudo" id='pseudo' onChange={(e) => setPseudo(e.target.value)}/>
            <div className='pseudo-error'></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <input class='input' type="password" name="password" id='password' onChange={(e) => setPassword(e.target.value)}/>
            <div className='password-error'></div>
            <br/>
            <label htmlFor="password-conf">Confirmez votre mot de Passe</label>
            <input class='input' type="password" name="password" id='password-conf' onChange={(e) => setControlPassword(e.target.value)} value={controlPassword}/>
            <div className='password-conf-error'></div>
            <br/>
            <input type="submit" value="Inscription" class="main-btn"/>
        </form>
        
    </div>
    )}
    </>
  )
}

export default SignUpForm