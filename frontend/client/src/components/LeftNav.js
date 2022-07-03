import React from 'react'

import { NavLink } from 'react-router-dom';

// SRC
import HomeIcon from '../src/icons/home.svg';
import TrendingIcon from '../src/icons/hot.svg';
import UserIcon from '../src/icons/user.svg';

const LeftNav = () => {

  return (
    <nav className="left-nav-container">
        <div className="left-nav-icons">
          <NavLink to = '/home' exact activClassName='selected-nav-element'>  
          <img src={HomeIcon} alt="home-icon"/>
          </NavLink>
          <NavLink to ='/trending' exact activClassName='selected-nav-element'>
          <img src={TrendingIcon} alt="trending-icon"/>
          </NavLink>
          <NavLink to='/profil' exact activClassName='selected-nav-element'>
          <img src={UserIcon} alt='profil-icon'/>
          </NavLink>
        </div>
    </nav>
  )
}

export default LeftNav;