import React from 'react';
import Navbar from '../components/Navbar';
import LeftNav from '../components/LeftNav';
import Thread from '../components/Thread';
import NewPostForm from '../components/Post/NewPostForm';
import Hot from '../components/Hot';

const Home = () => {
  return (
    
    <div className='home'>
      <Navbar/> 
      <LeftNav />
      <div className='home-top-container'>
        <NewPostForm/>
        <Thread />
        <Hot />
      </div>
    </div>
  )
}

export default Home
