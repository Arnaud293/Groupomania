import React from 'react';
import { useSelector } from 'react-redux';
import LeftNav from '../LeftNav';
import UploadImg from './UploadImg';

const UpdateProfil = () => {


 const userData = useSelector((state) => state.userReducer);  

  return (
    <div  className='profil-container'>
        <LeftNav/>
    
        <div className="top-profil-content">
        <h1>Profil de {userData.pseudo}</h1>
        </div>
        <div className="main-profil-content-container">
   
        <div className="main-profil-content-card">
            <h2>Pseudo</h2>
            <img src={userData.picture} alt="profil-picture"/>
            <UploadImg />
            {/* <p>{errors.maxSize}</p>
            <p>{errors.format}</p> */}
        </div>
   
        <div className="main-profil-content-card">
            <h2>Biographie</h2>
            <div className="bio-container">
                <textarea class="modify-bio"></textarea>
                <div className="bio-btn-container">
                    <input type="button" value="Modifier" className="bio-btn"/>
                </div>
            </div>
            <p>Membre depuis le 6 mars 1452</p>
            <input type="button" className="followers-btn" value="Abonnements:"/>
            <input type="button" className="followers-btn" value="Abonnés :"/>
        </div>
    </div>
    </div>
  )
}

export default UpdateProfil