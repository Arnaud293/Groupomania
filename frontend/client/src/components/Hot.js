import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getHotPosts } from '../actions/post.actions';
import { isEmpty } from './Utils';

const Hot = () => {

 const posts = useSelector((state) => state.allPostsReducer);
 const usersData = useSelector((state) => state.usersReducer);
 const userData = useSelector((state) => state.userReducer);
 const hotList = useSelector((state) => state.hotReducer);
 const dispatch = useDispatch();

 useEffect(() => {
    if(!isEmpty(posts[0])){
        const postsArray = Object.keys(posts).map((i) => posts[i]);
        let sortedArray = postsArray.sort((a, b) => {
            return b.likers.length - a.likers.length
        })
        sortedArray.length = 3;
        dispatch(getHotPosts(sortedArray))
    }
 }, [posts])

  return (
        <div class="right-side-card">
          <div class="hot-posts">
            <h1>Populaires</h1>
          </div>
          <div class="popular-card-container">
            {hotList.length && hotList.map((post) => {
                return (
                    <div key={post._id} class="popular-card">
                        <img src={
                          usersData[0] &&
                          usersData
                            .map((user) => {
                              if (user._id === post.posterId) {
                                return user.picture;
                              } else return null;
                            })
                            .join("")
                        } alt="poster-picture"/>
                        <p>{post.message}</p>
                        <NavLink exact to='/trending'>
                        <input type="button" class="read-btn" value="Lire"/>
                        </NavLink>
                    </div>
                )
            }) }
            
          </div>
        </div>

  )
}

export default Hot