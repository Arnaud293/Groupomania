import React, { useState } from 'react';
import { uploadPicture } from '../../actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';


const UploadImg = () => {

  const [file, setFile]  = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', userData.pseudo);
    data.append('userId', userData._id);
    data.append('file', file);

    dispatch(uploadPicture(data, userData._id))
  }  

  return (
    <form action='' onSubmit={handlePicture} className='profil-btn-container'>
    <label className='modify-image-btn' htmlFor='file'>Changer l'image</label>
    <input type='file' id='file' name='file' accept='.jpg, .jpeg, .png' onChange={(e) => setFile(e.target.files[0])}/>
    <br/>
    <input type='submit' value='Envoyer' class='validation-image-profil-btn' />  
    </form>
  )
}

export default UploadImg