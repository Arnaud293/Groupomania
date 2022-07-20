import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commentPost, getPosts } from '../../actions/post.actions';
import FollowHandler from '../Profil/FollowHandler';
import { isEmpty, timeStampParser } from '../Utils';
import EditDeleteComment from './EditDeleteComment';

const CardComments = ({post}) => {

const [text, setText] = useState('');    
const usersData = useSelector((state) => state.usersReducer);
const userData = useSelector((state) => state.userReducer);
const dispatch = useDispatch();

const handleComment = (e) => {
    e.preventDefault();

    if(text){
        dispatch(commentPost(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPosts()))
        .then(() => setText(''));
    }
};

  return (
    <div className='comment-post-container'>
        {post.comments.map((comment) => {
            return (
                <div className={comment.commenterId === userData._id ? "comment-post-commenter-card" : "comment-post-card"} key={comment._id}>
                    <img className='comment-post-card-img' src={!isEmpty(usersData[0]) 
                    && usersData.map((user) => {
                        if(user._id === comment.commenterId) return user.picture;
                        else return null;
                    }).join('')} 
                    alt="commenter-pic"/>
                    <div className="comment-post-card-text">
                        <span>{comment.commenterPseudo} {comment.commenterId !== userData._id &&( 
                        <FollowHandler idToFollow={comment.commenterId} type={'card'}/>)}
                        </span>
                        <p className="date">{timeStampParser(comment.timestamp)}</p>
                        <p className="comment-text">{comment.text}</p>
                        <EditDeleteComment comment={comment} postId={post._id} />
                    </div>
                </div>
            )
        })}
        {userData._id && (
            <div className="write-a-comment-card">
                <textarea className="write-a-comment-card-area" placeholder="Laisser un commentaire" onChange={(e) => setText(e.target.value)} value={text}></textarea>
                <input onClick={handleComment} type="button" className="send-message-btn" value="Envoyer"/>
            </div>
        )}
    </div>
  )
}

export default CardComments