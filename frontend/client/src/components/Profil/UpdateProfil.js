import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBio } from "../../actions/user.actions";
import LeftNav from "../LeftNav";
import { dateParser, isEmpty } from "../Utils";
import UploadImg from "./UploadImg";
import FollowHandler from "./FollowHandler";
import ResponsiveNav from '../ResponsiveNav';

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);

  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorReducer.userErrors);
  const dispatch = useDispatch();

  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      {/* POPUP ON TOP FOR BLUR MOD */}
      

      <LeftNav />

      <div className="top-profil-content">
        <h1>Profil de {userData.pseudo}</h1>
      </div>
      <ResponsiveNav />
      <div className="main-profil-content-container">

      {followersPopup && (
        <div className="popup-container">
          <div className="friends-hint-card-bis">
            <div className="friends-hint-card-top">
              <h1>
                Abonnés{" "}
                <span
                  onClick={() => setFollowersPopup(false)}
                  className="cross"
                >
                  &#10005;
                </span>
              </h1>
            </div>
            <div className="hint-all-card-container">
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <div key={user._id} className="hint-card">
                        <img src={user.picture} alt="user-picture" />
                        <p>{user.pseudo}</p>
                        <FollowHandler
                          idToFollow={user._id}
                          type={"suggestion"}
                        />
                        <span className="responsive-hint">
                          <FollowHandler idToFollow={user._id} type={"card"}/>
                        </span>
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      )}
      {followingPopup && (
        <div className="popup-container">
          <div className="friends-hint-card-bis">
            <div className="friends-hint-card-top">
              <h1>
                Abonnements{" "}
                <span
                  onClick={() => setFollowingPopup(false)}
                  className="cross"
                >
                  &#10005;
                </span>
              </h1>
            </div>
            <div className="hint-all-card-container">
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <div key={user._id} className="hint-card">
                        <img src={user.picture} alt="user-picture" />
                        <p>{user.pseudo}</p>
                        <FollowHandler
                          idToFollow={user._id}
                          type={"suggestion"}
                        />
                        <span className="responsive-hint">
                          <FollowHandler idToFollow={user._id} type={"card"}/>
                        </span>
                      </div>
                    );
                  } 
                }
              })}
            </div>
          </div>
        </div>
      )}

        <div className="main-profil-content-card">
          <h2>Ma photo de profil</h2>
          <img src={userData.picture} alt="profil-picture" />
          <UploadImg />
          {!isEmpty(errors.format) && <p className='errors'>{errors.format}</p>}
          {!isEmpty(errors.maxSize) && <p className='errors'>{errors.maxSize}</p>}
        </div>

        <div className="main-profil-content-card">
          <h2>Biographie</h2>
          <div className="bio-container">
            {updateForm === false && (
              <>
                <p
                  class="modify-bio"
                  onClick={() => setUpdateForm(!updateForm)}
                >
                  {userData.bio}
                </p>
                <div className="bio-btn-container">
                  <input
                    type="button"
                    value="Modifier"
                    className="bio-btn"
                    onClick={() => setUpdateForm(!updateForm)}
                  />
                </div>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  class="modify-bio"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <div className="bio-btn-container">
                  <input
                    type="button"
                    value="Valider"
                    className="bio-btn"
                    onClick={handleUpdate}
                  />
                </div>
              </>
            )}
          </div>
          <p>Membre depuis le :{dateParser(userData.createdAt)}</p>
          <h5 onClick={() => setFollowingPopup(true)} className="followers-btn">
            Abonnements : {userData.following ? userData.following.length : "0"}{" "}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)} className="followers-btn">
            Abonnés : {userData.followers ? userData.followers.length : "0"}{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
