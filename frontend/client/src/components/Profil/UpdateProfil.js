import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBio } from '../../actions/user.actions';
import LeftNav from '../LeftNav';
import UploadImg from './UploadImg';

const UpdateProfil = () => {

 const [bio, setBio] = useState('');
 const [updateForm, setUpdateForm] = useState(false);

 const userData = useSelector((state) => state.userReducer);  
 const dispatch = useDispatch();

 const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
 }

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
                {updateForm === false && (
                   <>
                   <p class="modify-bio" onClick={() => setUpdateForm(!updateForm)} >{userData.bio}</p>
                   <div className="bio-btn-container">
                    <input type="button" value="Modifier" className="bio-btn" onClick={() => setUpdateForm(!updateForm)}/>
                </div>
                   </> 
                )}
                {updateForm && (
                    <>
                    <textarea type='text' class="modify-bio" defaultValue={userData.bio} onChange={(e) => setBio(e.target.value)} ></textarea>
                    <div className="bio-btn-container">
                        <input type="button" value="Valider" className="bio-btn" onClick={handleUpdate}/>
                    </div>
                    </>
                )}
            </div>
            <p>Membre depuis le :{userData.createdAt}</p>
            <input type="button" className="followers-btn" value="Abonnements:"/>
            <input type="button" className="followers-btn" value="Abonnés :"/>
        </div>
    </div>
    </div>
  )
}

export default UpdateProfil