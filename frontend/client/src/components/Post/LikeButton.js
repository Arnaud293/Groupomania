import React, { useContext, useEffect, useState } from 'react'
import { UidContext } from '../AppContext';
import { useDispatch } from 'react-redux';

// SRC

import EmptyHeartImg from '../../src/icons/heart.svg';
import FilledHeartImg from '../../src/icons/heart-filled.svg';
import { likePost, unlikePost } from '../../actions/post.actions';

const LikeButton = ({post}) => {

  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, uid))
    setLiked(true);
  }

  const unlike = () => {
    dispatch(unlikePost(post._id, uid))
    setLiked(false);
  }

  useEffect(() => {
    if(post.likers.includes(uid)){
        setLiked(true)
    }
    else{setLiked(false)}
  }, [uid, post.likers, liked])
    
  return (
    <div class="interaction-count">
        {uid && liked === false && (
            <img src={EmptyHeartImg} onClick={like} alt='like-icon'/>
        )}
        {uid && liked && (
            <img src={FilledHeartImg} onClick={unlike} alt='unlike-icon'/>
        )}
        <p>{post.likers.length}</p>
    </div>
  )
}

export default LikeButton