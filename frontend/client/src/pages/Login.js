import React from 'react';
import Log from '../components/Log/index';

// SRC
import Background from '../../src/src/img/connection-background.jpg';
import Logo from '../../src/src/logo/icon-left-font-monochrome-white.svg';
import LogoSmall from '../../src/src/logo/icon-left-font-monochrome-white-petit.png';

const Login = () => {
  return (
    
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
  )
}

export default Login