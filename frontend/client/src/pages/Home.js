import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import LeftNav from '../components/LeftNav';
import Thread from '../components/Thread';
import NewPostForm from '../components/Post/NewPostForm';
import Hot from '../components/Hot';
import FriendsHint from '../components/Profil/FriendsHint';
import { UidContext } from '../components/AppContext';

const Home = () => {

  const uid = useContext(UidContext);

  return (
    
    <div className='home'>
      <Navbar/> 
      <LeftNav />
      <div className='home-top-container'>
        <NewPostForm/>
        <Thread />
        {uid && <FriendsHint />}
        <div class="right-side-container">
          <Hot />
        </div>
      </div>
    </div>
  )
}

export default Home
