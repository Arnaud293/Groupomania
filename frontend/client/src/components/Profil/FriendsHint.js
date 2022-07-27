import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import FollowHandler from "./FollowHandler";

const FriendsHint = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playOnce, setPlayOnce] = useState(true);
  const [friendsHint, setFriendsHints] = useState([]);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  const notFriendList = () => {
    let array = [];
    usersData.map((user) => {
      if (user._id !== userData._id && !user.followers.includes(userData._id)) {
        return array.push(user._id);
      }
    });
    array.sort(() => 0.5 - Math.random());
    if(window.innerHeight > 780){
        array.length = 5;
    } else if (window.innerHeight > 720){
        array.length = 4;
    } else if (window.innerHeight > 615){
        array.length = 2;
    } else if (window.innerHeight > 540){
        array.length = 1;
    } else {
        array.length = 0;
    }
    setFriendsHints(array);
  };

  useEffect(() => {
    if (playOnce && !isEmpty(usersData[0]) && !isEmpty(userData._id)) {
      notFriendList();
      setIsLoading(false);
      setPlayOnce(false);
    }
  }, [usersData, userData]);

  return (
    // <div class="feed-container">
    <div class="friends-hint-container">
      <div class="friends-hint-card">
        <div class="friends-hint-card-top">
          <h1>Suggestions</h1>
        </div>

        {isLoading ? (
          <div>
            <i className="fas fa-spinner fa-pulse"></i>
          </div>
        ) : (
          <div class="hint-all-card-container">
            {friendsHint &&
              friendsHint.map((user) => {
                for (let i = 0; i < usersData.length; i++) {
                  if (user === usersData[i]._id) {
                    return (
                      <div class="hint-card" key={user}>
                        <img src={usersData[i].picture} alt="user-picture" />
                        <p>{usersData[i].pseudo}</p>
                        <FollowHandler
                          idToFollow={usersData[i]._id}
                          type={"suggestion"}
                        />
                      </div>
                    );
                  }
                }
              })}
          </div>
        )}
      </div>
    </div>
//   </div>
  );
};

export default FriendsHint;
