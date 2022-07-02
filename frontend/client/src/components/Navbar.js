import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../../src/src/logo/icon-left-font-small.png';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

const Navbar = () => {

//   const uid = useContext(UidContext);

  return (
    <header class="main-pages-header">
        <NavLink exact to ='/home'>
        <div class="main-pages-header-container">
        <img src={CompanyLogo} alt="company-logo"/>
        <h1 class="main-pages-header-title">Groupomania</h1>
        </div>
        </NavLink>
        <Logout/>
        
    </header>
  )
}

export default Navbar;