import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isEmpty, timeStampParser } from '../Utils';

// SRC

import PictureIcon from '../../src/icons/picture.svg';
import { addPost, getPosts } from '../../actions/post.actions';

const NewPostForm = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [postPicture, setPostPicture] = useState(null);
  const [postVideo, setPostVideo] = useState('');
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.postErrors)
  const dispatch = useDispatch();


  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setPostVideo('');

    };

  const handlePost = async () => {
    if(message || postPicture || postVideo){
        const data = new FormData();
        data.append('posterId', userData._id);
        data.append('message', message);
        if(file){
            data.append('file', file);
        }
        data.append('video', postVideo);

        await dispatch(addPost(data));
        dispatch(getPosts());
        cancelPost();
    } else alert ('?')
  }

  const cancelPost = () => {
    setMessage('');
    setPostPicture('');
    setPostVideo('');
    setFile('');
  };


  const handleVideo = () => {
    let findLink = message.split(' ');
    for (let i = 0; i < findLink.length; i++){
        if(findLink[i].includes('https://www.yout') || findLink[i].includes('https://yout')){
            let embed = findLink[i].replace('watch?v=', 'embed/');
            setPostVideo(embed.split('&')[0]);
            findLink.splice(i, 1);
            setMessage(findLink.join(" "));
            setPostPicture('');
        }
    }
  }

  useEffect(() => {
    if (!isEmpty(userData)){
        setIsLoading(false);
        handleVideo()
    }
  }, [userData, message, postVideo])

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
                    
                        <div class="read-new-post-cards-container">
                            <div class="left-post-img">
                                <img src={userData.picture} alt="user-pic"/>
                            </div>
                            <div class="read-post-cards">
                                <div class="read-post-header">
                                    <span>{userData.pseudo}</span>
                                    <p class="date">{timeStampParser(Date.now())}</p>
                                </div>
                            </div>
                            <div class="read-new-post-message">
                                <p> 
                                    {message}          
                                </p>
                                <br/>
                                {postPicture && (
                                <img src={postPicture} alt="post-picture"/>)}
                                {postVideo && (
                                    <iframe
                                        src={postVideo}
                                        frameborder='0'
                                        allow='accelerometer; autoplay; clipboard-write; 
                                        encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                        title={postVideo}
                                        >
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
                        onChange={(e) => handlePicture(e)}/>
                    </div>
                    </>
                    )}
                    {/* <input onClick={handlePost()} type="button" className="send-message-btn" value="Envoyer"/> */}
                    {postVideo && (
                        <input onClick={() => setPostVideo('')} type="button" className='send-message-btn' value='Supprimer vidéo' />
                    )}
                    {!isEmpty(error.format) && <p>{error.format}</p>}
                    {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
                    

                    <div className='post-btn'>
                        {message || postPicture || postVideo.length > 20 ? (
                        <input className='send-message-btn' value='Annuler' type='button' onClick={cancelPost} />
                        ) : null}
                        <input className='send-message-btn' value='Envoyer' type='button' onClick={handlePost} />
                    </div>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default NewPostForm