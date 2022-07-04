import React, { useState } from 'react';
import {useSelector} from 'react-redux';

const FollowHandler = (idToFollow) => {

    const userData = useSelector((state) =>state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {};
    const handleUnfollow = () => {};

  return (
    <div>

        <input type="button" className="follow-btn" value="Suivre"/>

    </div>
  )
}

export default FollowHandler