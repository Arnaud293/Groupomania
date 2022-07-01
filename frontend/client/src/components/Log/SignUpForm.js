import React from 'react'

const SignUpForm = () => {
  return (
    <div class="connection-form-card">
        <form class="connection-form">
            <label for="text">Email</label>
            <input class="input" type="text" name="text"/>
            <br/>
            <label for="text">Pseudo</label>
            <input class='input' type="text" name="text"/>
            <br/>
            <label for="text">Mot de passe</label>
            <input class='input' type="text" name="text"/>
            <br/>
            <label for="text">Confirmez votre mot de Passe</label>
            <input class='input' type="text" name="text"/>
            <br/>
            <input type="submit" value="Connexion" class="main-btn"/>
        </form>
        
    </div>
  )
}

export default SignUpForm