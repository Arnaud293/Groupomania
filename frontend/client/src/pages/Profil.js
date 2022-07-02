import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';

// SRC
import HomeIcon from '../../src/src/icons/home.svg';
import TrendingIcon from '../../src/src/icons/hot.svg';
import ProfilIcon from '../../src/src/icons/user.svg';
import Navbar from '../components/Navbar';

const Profil = () => {

  const uid = useContext(UidContext);

  return (
    <div className='profil'>
    <Navbar />
    <nav class="left-nav-container">
        <div class="left-nav-icons">
          <img class='selected-nav-element' src={HomeIcon} alt="home-icon"/>
          <img src={TrendingIcon} alt="trending-icon"/>
          <img src={ProfilIcon} alt='profil-icon'/>
        </div>
    </nav>
    {/* {uid ? (
      <h1>PAGE DU PROFIL</h1>
    ) : (
      window.location('/')
    )} */}

    </div>
  )
}

export default Profil