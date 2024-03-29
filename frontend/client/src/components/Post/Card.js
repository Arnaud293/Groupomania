import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../Utils';
import FollowHandler from '../Profil/FollowHandler';
import LikeButton from './LikeButton';

// SRC
import CommentIcon from '../../src/icons/message2.svg';
import SharingIcon from '../../src/icons/share.svg';
import EditIcon from '../../src/icons/edit.svg';
import { getPosts, updatePost } from '../../actions/post.actions';
import DeleteCard from './DeleteCard';
import CardComments from './CardComments';

const Card = ({post}) => {

 const [isLoading, setIsLoading] = useState(true);
 const [isUpdated, setIsUpdated] = useState(false);
 const [textUpdate, setTextUpdate] = useState(null);
 const [showComments, setShowComments] = useState(false);
 const usersData = useSelector((state) => state.usersReducer);
 const userData = useSelector((state) => state.userReducer);
 const dispatch = useDispatch();

 const updateItem = () => {
    if(textUpdate){
        dispatch(updatePost(post._id, textUpdate))
    }
    setIsUpdated(false);
 };

 useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
 }, [usersData]);
 

  return (
    <div className='read-post-cards-container' key={post._id}>
        {isLoading ? (
            <i className='fas fa-spinner fa-spin'></i>
        ) : (
            <>
            <div className="left-post-img">
                <img src={
                    !isEmpty(usersData[0]) && usersData.map((user) => {
                        if(user._id === post.posterId) return user.picture;
                        else return null;
                    }).join('') 
                } alt="user-pic"/>
            </div>
            <div className="read-post-cards">
                <div className="read-post-header">
                    <span>{
                    !isEmpty(usersData[0]) && usersData.map((user) => {
                        if(user._id === post.posterId) return user.pseudo;
                        
                        else {return null;}
                    })
                    }
                    {post.posterId !== userData._id && (
                    <FollowHandler idToFollow={post.posterId} type={'card'}/>)}
                    </span>
                    
                    <p className="date">{dateParser(post.createdAt)}</p>
                </div>
                <br/>
                <div className="read-post-message">
                    {isUpdated === false && <p>
                        {post.message}
                    </p>}
                    {isUpdated && (
                        <div className='update-post'>
                            <textarea id='update-message'
                            defaultValue={post.message}
                            onChange={(e) => setTextUpdate(e.target.value)}
                            />
                            <div className='update-btn-container'>
                                <button className='validation-btn' onClick={updateItem}>Valider</button>
                            </div>
                        </div>
                    )}
                    {post.picture && <img src={post.picture} alt='card-pic' />}
                    {post.video && (
                        <iframe
                        width="100%"
                        height='300'
                        src={post.video}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                        </iframe>
                    )}
                    {userData._id === post.posterId && userData.admin === false && (
                        <div class="read-post-message-bottom">
                            <img src={EditIcon} alt="icon-edit" onClick={() => setIsUpdated(!isUpdated)}/>
                            <DeleteCard id={post._id}/>
                        </div>
                    )}
                    {userData.admin === true && (
                        <div class="read-post-message-bottom">
                            <img src={EditIcon} alt="icon-edit" onClick={() => setIsUpdated(!isUpdated)}/>
                            <DeleteCard id={post._id}/>
                        </div>
                    )}
                    

                </div>
                <br/>
                <div className="read-post-footer">
                    <div className="interaction-count">
                        <img src={CommentIcon} alt="comment-icon" onClick={() => setShowComments(!showComments)}/>
                        <p>{post.comments.length}</p>
                    </div>
                    <LikeButton post={post}/>
                    <img src={SharingIcon} alt="share-icon"/>
                </div>
                {showComments && <CardComments post={post}/>}
            </div>
            
            </>
        )}
    </div>
  )
}

export default Card