import React from 'react';
import Navbar from '../components/Navbar';
import LeftNav from '../components/LeftNav';
import Thread from '../components/Thread';
import NewPostForm from '../components/Post/NewPostForm';

const Home = () => {
  return (
    
    <div className='home'>
      <Navbar/> 
      <LeftNav />
      <div className='home-top-container'>
        <NewPostForm/>
        <Thread />
      </div>
    </div>
  )
}

export default Home
