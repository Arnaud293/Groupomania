import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../../src/src/logo/icon-left-font-small.png';
import CompanyLogoBis from '../../src/src/logo/logo-text.png';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

const Navbar = () => {

//   const uid = useContext(UidContext);

  return (
    <header class="main-pages-header">
        <NavLink to ='/home' className='inactive'>
        <div class="main-pages-header-container">
        <img src={CompanyLogo} alt="company-logo"/>
        <img className='header-logo-text' src={CompanyLogoBis} alt="company-logo"/>
        </div>
        </NavLink>
        <Logout/>
        
    </header>
  )
}

export default Navbar;