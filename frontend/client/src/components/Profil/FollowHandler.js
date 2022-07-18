import React, {  useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user.actions';
import {isEmpty} from '../Utils';

const FollowHandler = (idToFollow) => {

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
      <span onClick={handleUnfollow}>
      {isFollowed && !isEmpty(userData) && (
        <button className="follow-btn">Abonné</button>
        )}
      </span>

      <span onClick={handleFollow}>
      {isFollowed === false && !isEmpty(userData) && (
         <button className="follow-btn">Suivre</button>
      )}
      </span>
    </>
  )
}

export default FollowHandler