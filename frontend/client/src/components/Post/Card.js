import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../Utils';
import FollowHandler from '../Profil/FollowHandler';
import LikeButton from './LikeButton';

// SRC
import CommentIcon from '../../src/icons/message2.svg';
import SharingIcon from '../../src/icons/share.svg';

const Card = ({post}) => {

 const [isLoading, setIsLoading] = useState(true);
 const usersData = useSelector((state) => state.usersReducer);
 const userData = useSelector((state) => state.userReducer);

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
                    }).join('') 
                } alt="user-pic"/>
            </div>
            <div className="read-post-cards">
                <div className="read-post-header">
                    <span>{
                    !isEmpty(usersData[0]) && usersData.map((user) => {
                        if(user._id === post.posterId) return user.pseudo;
                    })
                    }
                    </span>
                    {post.posterId !== userData._id && (
                    <FollowHandler idToFollow={post.posterId} type={'card'}/>)}
                    <p className="date">{dateParser(post.createdAt)}</p>
                </div>
                <div className="read-post-message">
                    <p>
                        {post.message}
                    </p>
                    {post.picture && <img src={post.picture} alt='card-pic' />}
                    {post.video && (
                        <iframe
                        width="500"
                        height='300'
                        src={post.video}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                        </iframe>
                    )}
                    

                </div>
                <div className="read-post-footer">
                    <div className="interaction-count">
                        <img src={CommentIcon} alt="comment-icon"/>
                        <p>{post.comments.length}</p>
                    </div>
                    <LikeButton post={post}/>
                    <img src={SharingIcon} alt="share-icon"/>
                </div>
            </div>
            
            </>
        )}
    </div>
  )
}

export default Card