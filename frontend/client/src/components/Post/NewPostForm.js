import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils';

const NewPostForm = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [postPicture, setPostPicture] = useState(null);
  const [postVideo, setPostVideo] = useState('');
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);


  useEffect(() => {
    if (!isEmpty(userData)){
        setIsLoading(false);
    }
  }, [userData])

  return (
    <div className='create-post-container'>
        {isLoading ? (
            <i className='fas fa-spinner fa-pulse'></i>
        ) : (
            <>
            <div class="profil-img-container">
                <img src="./src/img/P1070149.jpg" alt="profil-picture"/>
            </div>
          
            <div class="create-post-form">
                <textarea name="message" id="message" placeholder="Quoi de neuf ?"></textarea>
            </div>

            <div class="create-post-form-bottom-container">
                <div class="create-post-form-bottom">
                    <img src="./src/icons/picture.svg" alt="icon-pic"/>
                    <input type="button" class="send-message-btn" value="Envoyer"/>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default NewPostForm