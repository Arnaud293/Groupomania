import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin= (e) =>{
      e.preventDefault();
      const emailError = document.querySelector('.email-error');
      const passwordError = document.querySelector('.password-error');

      axios({
        method : 'post',
        url: `${process.env.REACT_APP_API_URL}api/user/login`,
        withCredentials : true,
        data: {
          email,
          password,
        }
      })

      .then((res) => {
        console.log(res.data.errors);
        if(res.data.errors){
          emailError.innerHTML= res.data.errors.email;
          passwordError.innerHTML= res.data.errors.password;
        } else {
          window.location = '/home'
        }
      })
      .catch((err) => {
        if(err.response.data.errors){
          emailError.innerHTML= err.response.data.errors.email;
          passwordError.innerHTML= err.response.data.errors.password;
        } else {
          window.location = '/home'
        }
      })
    };

  return (
    <div class="connection-form-card">
        <form action="" onSubmit={handleLogin} class="connection-form">
            <label htmlFor="email">Email</label>
            <input class="input" type="text" name="text" id='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <div className='email-error'></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <input class='input' type="password" name="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <div className='password-error'></div>
            <br/>
            <input type="submit" value="Connexion" class="main-btn"/>
        </form>
    
    </div>
  )
}

export default SignInForm;