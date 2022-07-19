import React, {  useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user.actions';
import {isEmpty} from '../Utils';

// SRC

import CheckIcon from '../../src/icons/check.svg';
import CheckedIcon from '../../src/icons/checked.svg';

const FollowHandler = ({idToFollow, type}) => {

    const userData = useSelector((state) =>state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();

    const handleFollow = () => {
      dispatch(followUser(userData._id, idToFollow.idToFollow));
      setIsFollowed(true);
    };
    const handleUnfollow = () => {
      dispatch(unfollowUser(userData._id, idToFollow.idToFollow));
      setIsFollowed(false);
    };

    useEffect(() => {

      if(!isEmpty(userData.following)){
        if(userData.following.includes(idToFollow.idToFollow)){
          // debugger;
          setIsFollowed(true);

        } else {
          setIsFollowed(false);
        }
      }

    }, [userData, idToFollow]);

  return (
    <>
      
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnfollow}>
          {type === "suggestion" &&<button className="follow-btn">Abonné</button>}
          {type === "card" && <img src={CheckedIcon} />}
        </span>
        )}
      

      
      {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
         {type === "suggestion" &&<button className="follow-btn">Suivre</button>}
         {type === "card" && <img src={CheckIcon} />}
        </span>
      )}
      
    </>
  )
}

export default FollowHandler