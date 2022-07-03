import React from 'react';
import { useSelector } from 'react-redux';
import LeftNav from '../LeftNav';
import UploadImg from './UploadImg';

const UpdateProfil = () => {


 const userData = useSelector((state) => state.userReducer);  

  return (
    <div  className='profil-container'>
        <LeftNav/>
    
        <div class="top-profil-content">
        <h1>Profil de {userData.pseudo}</h1>
        </div>
        <div class="main-profil-content-container">
   
        <div class="main-profil-content-card">
            <h2>Pseudo</h2>
            <img src={userData.picture} alt="profil-picture"/>
            <UploadImg />
            {/* <p>{errors.maxSize}</p>
            <p>{errors.format}</p> */}
        </div>
   
        <div class="main-profil-content-card">
            <h2>Biographie</h2>
            <div class="bio-container">
                <textarea class="modify-bio"></textarea>
                <div class="bio-btn-container">
                    <input type="button" value="Modifier" class="bio-btn"/>
                </div>
            </div>
            <p>Membre depuis le 6 mars 1452</p>
            <input type="button" class="followers-btn" value="Abonnements:"/>
            <input type="button" class="followers-btn" value="Abonnés :"/>
        </div>
    </div>
    </div>
  )
}

export default UpdateProfil