import React from 'react';
import Navbar from '../components/Navbar';
import LeftNav from '../components/LeftNav';
import Thread from '../components/Thread';

const Home = () => {
  return (
    
    <div className='home'>
      <Navbar/> 
      <LeftNav />
      <Thread />
    </div>
  )
}

export default Home
