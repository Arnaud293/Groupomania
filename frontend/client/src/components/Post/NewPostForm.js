import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isEmpty, timeStampParser } from '../Utils';

// SRC

import PictureIcon from '../../src/icons/picture.svg';

const NewPostForm = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [postPicture, setPostPicture] = useState(null);
  const [postVideo, setPostVideo] = useState('');
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);


  const handlePicture = () => {};

  const handlePost = () => {};

  const cancelPost = () => {
    setMessage('');
    setPostPicture('');
    setPostVideo('');
    setFile('');
  };

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
                <NavLink exact to='/profil'>
                <img src={userData.picture} alt="profil-picture"/>
                </NavLink>
            </div>
          
            <div class="create-post-form">
                <textarea 
                name="message" 
                id="message" 
                placeholder="Quoi de neuf ?"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />
                {message || postPicture || postVideo.length > 20 ? (
                    
                        <div class="read-post-cards-container">
                            <div class="left-post-img">
                                <img src={userData.picture} alt="user-pic"/>
                            </div>
                            <div class="read-post-cards">
                                <div class="read-post-header">
                                    <span>{userData.pseudo}</span>
                                    <p class="date">{timeStampParser(Date.now())}</p>
                                </div>
                            </div>
                            <div class="read-post-message">
                                <p> 
                                    {message}          
                                </p>
                                <img src={postPicture} alt="post-picture"/>
                                {setPostVideo && (
                                    <iframe>
                                        src={postVideo},
                                        frameborder='0',
                                    </iframe>
                                )}
                            </div>
                        </div>
                    
                ) : null}
            </div>

            <div className="create-post-form-bottom-container">
                <div className="create-post-form-bottom">
                    {isEmpty(postVideo) && (
                    <>
                    <div>
                        <img src={PictureIcon} alt="icon-pic"/>
                        <input type='file' id='file-upload' name='file' accept='.jpg, .png, .jpeg'
                        onChange={handlePicture()}/>
                    </div>
                    </>
                    )}
                    {/* <input onClick={handlePost()} type="button" className="send-message-btn" value="Envoyer"/> */}
                    {postVideo && (
                        <input onClick={() => setPostVideo('')} type="button" className='send-message-btn' value='Supprimer vidéo' />
                    )}

                    <div className='post-btn'>
                        {message || postPicture || postVideo.length > 20 ? (
                        <input className='send-message-btn' value='Annuler' type='button' onClick={cancelPost} />
                        ) : null}
                        <input className='send-message-btn' value='Envoyer' type='button' onClick={handlePost()} />
                    </div>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default NewPostForm