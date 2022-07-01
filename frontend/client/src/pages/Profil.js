import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';

// SRC
import HomeIcon from '../../src/src/icons/home.svg';
import CompanyLogo from '../../src/src/logo/icon-left-font-small.png';
import TrendingIcon from '../../src/src/icons/hot.svg';
import ProfilIcon from '../../src/src/icons/user.svg';
import LogoutIcon from '../../src/src/icons/circle-logout.svg';

const Profil = () => {

  const uid = useContext(UidContext);

  return (
    <div className='profil'>
      <header class="main-pages-header">
        <div class="main-pages-header-container">
          <img src={CompanyLogo} alt="company-logo"/>
          <h1 class="main-pages-header-title">Groupomania</h1>
        </div>
        <img class="main-pages-header-icon" src={LogoutIcon} />
        
    </header>
    <nav class="left-nav-container">
        <div class="left-nav-icons">
          <img class='selected-nav-element' src={HomeIcon} alt="home-icon"/>
          <img src={TrendingIcon} alt="trending-icon"/>
          <img src={ProfilIcon} alt='profil-icon'/>
        </div>
    </nav>
    {uid ? (
      <h1>PAGE DU PROFIL</h1>
    ) : (
      window.location('/')
    )}

    </div>
  )
}

export default Profil