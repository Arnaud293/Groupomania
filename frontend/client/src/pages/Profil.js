import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';

// SRC
// import HomeIcon from '../../src/src/icons/home.svg';
// import TrendingIcon from '../../src/src/icons/hot.svg';
// import ProfilIcon from '../../src/src/icons/user.svg';
import Navbar from '../components/Navbar';
import UpdateProfil from '../components/Profil/UpdateProfil';
import Log from '../components/Log';

// SRC
import Background from '../../src/src/img/connection-background.jpg';
import Logo from '../../src/src/logo/icon-left-font-monochrome-white.svg';
import LogoSmall from '../../src/src/logo/icon-left-font-monochrome-white-petit.png';

const Profil = () => {

  const uid = useContext(UidContext);

  return (
    <div>
      {uid ? (
      <div className='profil'>
     
      <Navbar />
      <UpdateProfil />
      
      </div>
      ): (
        <div className='connection'>
        <img src={Background} alt="team-pic" class='background-img'/>
      <header>
      <div class="connection-page-logo">
          <img src={Logo} alt="logo" />
      </div>
      <div class="connection-page-logo-small">
          <img src={LogoSmall} alt="logo" />
      </div>
      </header>
      

      <Log signin={true} signup={false}/>

    </div>
      )}
    
    </div>
  )
}

export default Profil