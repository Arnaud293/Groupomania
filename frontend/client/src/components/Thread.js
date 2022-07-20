import React, { useEffect, useState } from 'react';
import { getPosts } from '../actions/post.actions';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from './Utils';
import Card from './Post/Card';


const Thread = () => {

  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  const [count, setCount] = useState(5);


  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight){
      setLoadPost(true);
    }
  }

  useEffect(() => {
    if(loadPost) {
        dispatch(getPosts(count));
        setLoadPost(false);
        setCount(count + 5);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore)
  }, [loadPost])

  return (
    
        <div className='feed-container'>
            {!isEmpty(posts[0]) && (
                posts.map((post) => {
                    return <Card post={post} key={post._id} />
                })
            )}
        </div>
   
  )
}

export default Thread